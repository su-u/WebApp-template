FROM node:10.15.3-alpine
WORKDIR /api

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

RUN yarn install
#RUN yarn run start
