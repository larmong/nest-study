# 1. 운영체제 및 프로그램 설치 (리눅스, node, npm, yarn 모두 포함되어있는 설치 방식)
FROM node:14

# 2. 로컬에 있는 폴더/파일 도커로 복사
COPY ./package.json /backend/
COPY ./yarn.lock /backend/
WORKDIR /backend/
RUN yarn install

COPY . /backend/

# 3. 도커 안에서 index.js 실행
CMD yarn start
