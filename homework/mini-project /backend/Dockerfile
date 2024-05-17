FROM node:18

COPY ./package.json /mini-project/
COPY ./yarn.lock /mini-project/
WORKDIR /mini-project/
RUN yarn install

COPY . /mini-project/

CMD yarn start:dev