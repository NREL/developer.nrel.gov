FROM public.ecr.aws/docker/library/ruby:3.3-bookworm

ENV \
  BUNDLE_JOBS=20 \
  BUNDLE_RETRY=5 \
  DOCKER=true \
  NODE_MODULES_DIR=/usr/local/node_modules \
  NODE_OPTIONS="--use-openssl-ca --openssl-shared-config" \
  PNPM_HOME=/usr/local/pnpm

# Install NREL root certs for machines running on NREL's network.
ARG NREL_ROOT_CERT_URL_ROOT=""
RUN set -x && \
  if [ -n "$NREL_ROOT_CERT_URL_ROOT" ]; then \
    curl -fsSLk -o /usr/local/share/ca-certificates/nrel_root.crt "${NREL_ROOT_CERT_URL_ROOT}/nrel_root.pem" && \
    curl -fsSLk -o /usr/local/share/ca-certificates/nrel_xca1.crt "${NREL_ROOT_CERT_URL_ROOT}/nrel_xca1.pem" && \
    update-ca-certificates; \
  fi

# NodeJS and pnpm
ARG NODEJS_MAJOR_VERSION=20
ARG PNPM_VERSION=8.15.9
RUN set -x && \
  version="node_${NODEJS_MAJOR_VERSION}.x" && \
  distro=$(. /etc/os-release && echo "$VERSION_CODENAME") && \
  apt-get update && \
  curl -fsSL -o /usr/share/keyrings/nodesource.asc https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key && \
  echo "deb [signed-by=/usr/share/keyrings/nodesource.asc] https://deb.nodesource.com/$version nodistro main" > /etc/apt/sources.list.d/nodesource.list && \
  apt-get update && \
  apt-get -y --no-install-recommends install nodejs && \
  npm install -g "pnpm@${PNPM_VERSION}" && \
  npmrc_path="$(npm config get globalconfig)" && \
  if [ "$npmrc_path" != "/etc/npmrc" ]; then \
    mkdir -p "$(dirname $npmrc_path)" && \
    ln -s "$npmrc_path" /etc/npmrc; \
  fi && \
  echo "update-notifier=false" > /etc/npmrc && \
  echo "cafile=/etc/ssl/certs/ca-certificates.crt" >> /etc/npmrc && \
  echo "store-dir=${PNPM_HOME}/store" >> /etc/npmrc && \
  mkdir -p "${NODE_MODULES_DIR}/.pnpm" && \
  rm -rf /var/lib/apt/lists/* /var/lib/dpkg/*-old /var/cache/* /var/log/* /root/.npm

RUN mkdir -p /app
WORKDIR /app

# Install gems (all gems first for better Docker caching for CI/CD).
COPY Gemfile Gemfile.lock /app/
RUN bundle install
ARG BUNDLE_INSTALL_ARGS="--frozen --without=development test"
RUN set -x && bundle install $BUNDLE_INSTALL_ARGS && bundle clean --force --verbose

# Install NPM dependencies.
COPY package.json pnpm-lock.yaml /app/
ARG PNPM_INSTALL_ARGS="--frozen-lockfile"
RUN --mount=type=cache,target=/usr/local/pnpm/store set -x && \
  pnpm install $PNPM_INSTALL_ARGS

COPY . /app

CMD ["/app/bin/docker-start"]
