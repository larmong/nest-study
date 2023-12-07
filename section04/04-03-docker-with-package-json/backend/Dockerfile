# 1. 운영체제 및 프로그램 설치 ::: 이미 리눅스, node, npm, yarn 까지 한번에 다운받는 방법
FROM node:14

# 2. 로컬에 있는 폴더or파일을 Docker 안으로 복사하기
# RUN mkdir myfolder ::: COPY 할 떄, 폴더가 없을 경우 자동으로 생성해주기 때문에 굳이 생성할 필요 없음!!!
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 3. Docker 안에서 index.js 실행시키기
# 실행할 때 명령어 => RUN, CMD
# CMD 전까지 명령어는 모두 이미지로 저장한다 ===> Docker 실행 할 때 사용, 한번만 사용할 수 있음!!!
CMD yarn nodemon