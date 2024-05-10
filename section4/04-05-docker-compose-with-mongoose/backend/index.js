import express from 'express'
// import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from "./email.js";
import cors from 'cors'
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(cors())  // cors 허용

app.get('/boards', function (req, res) {
  // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { id: 1, writer: "철수", title: "111 제목", contents: "111 내용" },
    { id: 2, writer: "영희", title: "222 제목", contents: "222 내용" },
    { id: 3, writer: "훈이", title: "333 제목", contents: "333 내용" },
  ];

  // 2. DB에서 꺼내온 데이터를 응답(res)
  res.send(result)
})

app.post('/boards', function (req, res) {
  // 1. 브라우저에서 보내 준 데이터 확인
  console.log(req)
  console.log("===========================")
  console.log(req.body)

  // 2. DB에 접속 후 데이터를 저장 => 데이터 저장했다고 가정

  // 2. DB에 저장된 결과를 브라우저에 응답(res)
  res.send('게시물이 등록에 성공하였습니다!')
})

app.post('/tokens/phone', function (req, res) {
  const phone = req.body.phone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(phone)
  if (!isValid) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const token = getToken()

  // 3. 핸드폰번호로 토큰 전송하기
  sendTokenToSMS(phone, token)

  res.send('인증완료!!!')
})

app.post('users', function (req, res){
  const { name, email, age, school } = req.body

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함 여부)
  const isValid = checkEmail(email);
  if(!isValid) return;

  // 2. 가입환영 템픔릿
  const template = getWelcomeTemplate(name, email, age, school)

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, template)
})


mongoose.connect("mongodb://database:27017/my-docker")
  .then(() => {
    console.log("db 접속에 성공하였습니다 🥳")
  })
  .catch(() => {
    console.log("db 접속에 실패하였습니다 🥹")
  })

app.listen(4000);
