FROM node:18

COPY ./package.json /quiz-docker/
COPY ./yarn.lock /quiz-docker/
WORKDIR /quiz-docker/
RUN yarn install

COPY . /quiz-docker/

CMD yarn start:dev