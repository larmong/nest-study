# 1. 운영체제 및 프로그램 설치 (개별 설치 방식)
#FROM ubuntu:22.04
#
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (리눅스, node, npm, yarn 모두 포함되어있는 설치 방식)
FROM node:14

# 2. 로컬에 있는 폴더/파일 도커로 복사
# RUN mkdir backend  ===>  아래에서 COPY 할 때, 자동으로 만들어주므로 굳이 필요 없음!
COPY . /backend/

# RUN cd ./backend/  ===>  backend 폴더 안으로 이동
WORKDIR /backend/
RUN yarn install

# 3. 도커 안에서 index.js 실행
# RUN node index.js
CMD yarn start
