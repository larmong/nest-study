# 1. 운영체제 및 프로그램 설치 ::: 개별로 다운받는 방법
#FROM ubuntu:22.04
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치 ::: 이미 리눅스, node, npm, yarn 까지 한번에 다운받는 방법
FROM node:14

# 2. 로컬에 있는 폴더or파일을 Docker 안으로 복사하기
COPY ./index.js /index.js

# 3. Docker 안에서 index.js 실행시키기
# 실행할 때 명령어 => RUN, CMD
# CMD 전까지 명령어는 모두 이미지로 저장한다 ===> Docker 실행 할 때 사용, 한번만 사용할 수 있음!!!
CMD node index.js