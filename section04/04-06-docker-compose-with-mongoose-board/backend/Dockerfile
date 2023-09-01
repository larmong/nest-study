# 1. 운영체제 및 프로그램 설치 => 이미 linux, node, npm yarn 모두 깔려있는 컴퓨터 다운로드
FROM node:16.14

# 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터로 복사하기(COPY)
# RUN mkdir myfolder => 아래에서 COPY 할 때, myfolder가 없으면 자동으로 만들어주므로 굳이 필요 없음
# RUN cd ./myfolder/ => myfolder 안으로 이동: WORKDIR과 같음
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 도커 안에서 index.js 실행시키기
CMD yarn start:dev
