# 1. 운영체제 및 프로그램 설치 (FROM, docker pull) => 하나하나 설치해야 함
#FROM ubuntu:22.04

#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치 => 이미 linux, node, npm yarn 모두 깔려있는 컴퓨터 다운로드
FROM node:16.14

# 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터로 복사하기(COPY)
COPY ./index.js /index.js

# 도커 안에서 index.js 실행시키기
CMD node index.js
