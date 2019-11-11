FROM ruby:2.6.3

# Determine Debian version
RUN apt-get update && apt-get -y install lsb-release

# NodeJS and Yarn
RUN set -x && \
  VERSION=node_8.x && \
  DISTRO="$(lsb_release -s -c)" && \
  curl -sS https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo "deb http://deb.nodesource.com/$VERSION $DISTRO main" > /etc/apt/sources.list.d/nodesource.list && \
  echo "deb-src http://deb.nodesource.com/$VERSION $DISTRO main" >> /etc/apt/sources.list.d/nodesource.list && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb http://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get -y install nodejs yarn
ENV NODE_OPTIONS --use-openssl-ca

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock /app/
RUN bundle install --jobs=20 --retry=5

COPY yarn.lock /app/
RUN yarn

COPY . /app

CMD ["bundle", "exec", "middleman", "server", "--port", "4480"]
