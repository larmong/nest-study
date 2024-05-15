# 1. 운영체제 및 프로그램 설치 (개별 설치 방식)
#FROM ubuntu:22.04
#
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (리눅스, node, npm, yarn 모두 포함되어있는 설치 방식)
FROM node:14

# 2. 로컬에 있는 폴더/파일 도커로 복사
COPY ./index.js date.js

# 3. 도커 안에서 date.js 실행
# RUN node date.js
CMD node date.js
