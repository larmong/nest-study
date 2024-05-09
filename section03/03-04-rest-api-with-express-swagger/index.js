import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", function (req, res){
  // 1. DB에 접속 후 데이터 조회 => 데이터를 조회했다고 가정
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "안녕하세요! 철수입니다~!",
      contents: "철수에여~~~",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다~!",
      contents: "반가워요!",
    },
    {
      number: 3,
      writer: "훈이",
      title: "안녕하세요!",
      contents: "훈이에여!!!!!!",
    },
  ]

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response)
  res.send(result)
})

app.post("/board", function (req, res){
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("=======================")
  console.log(req.body)

  // 2. DB에 접속 후 데이터를 저장 => 데이터를 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response)
  res.send("게시물이 등록되었습니다!")
})

app.post("/token/phone", function (req, res){
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  const isPhone = checkPhone(req.body.phone);
  if(!isPhone) return;

  // 2. 인증 토큰 6자리 만들기
  const token = getToken();

  // 3. 인증 토큰 전송하기
  sendTokenToSMS(req.body.phone, token)

  res.send("인증완료!!!")
})

app.listen(3000);
