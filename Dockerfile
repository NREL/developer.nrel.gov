FROM ruby:2.7-bullseye

ENV \
  BUNDLE_JOBS=4 \
  BUNDLE_RETRY=3 \
  DOCKER=true \
  NODE_OPTIONS=--use-openssl-ca \
  NODE_MODULES_DIR=/usr/local/node_modules

# Determine Debian version
RUN apt-get update && apt-get -y install lsb-release

# NodeJS and Yarn
RUN set -x && \
  VERSION=node_14.x && \
  DISTRO="$(lsb_release -s -c)" && \
  curl -sSk https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo "deb http://deb.nodesource.com/$VERSION $DISTRO main" > /etc/apt/sources.list.d/nodesource.list && \
  echo "deb-src http://deb.nodesource.com/$VERSION $DISTRO main" >> /etc/apt/sources.list.d/nodesource.list && \
  curl -sSk https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb http://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get -y install nodejs yarn
ENV NODE_OPTIONS --use-openssl-ca

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock /app/
RUN bundle install --jobs=20 --retry=5

COPY package.json yarn.lock /app/
RUN mkdir -p "$NODE_MODULES_DIR" && \
  ln -s "$NODE_MODULES_DIR" /app/node_modules && \
  yarn

COPY . /app

CMD ["/app/bin/docker-start"]
