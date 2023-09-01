import express from "express"

import {checkEmail, getTemplate, sendTemplateToEmail} from "./email.js";
import {checkPhone, getToken, sendTokenToSMS} from "./phone.js";

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from "./swagger/config.js";
import cors from 'cors'
import mongoose from 'mongoose';
import {Board} from "./models/board.model.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get('/boards', async function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회
  const result = await Board.find()

  // 2. DB 에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result)
})

app.post('/boards', async function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("=====================")
  console.log(req.body)

  // 2. DB에 접속 후, 데이터를 저장
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  })
  await board.save()

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.")
})

app.post("/tokens/phone", function (req, res){
  const userPhone = req.body.num

  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  const isValid = checkPhone(userPhone)
  if(!isValid) return

  // 2. 핸드폰 토큰 6자리 만들기
  const token = getToken()

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(userPhone, token)

  res.send("인증완료!!!")
})


// 회원 등록 api
app.post("/users", function (req, res){
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  //   ㄴ 구조 분해 할당
  const {name, age, school, email} = req.body


  // 1. 이메일이 정상인지 확인(존재여부, "@"포함여부)
  const isValid = checkEmail(email)
  if(!isValid) return

  // 2. 가입환영 템플릿 만들기
  const template = getTemplate({ name, age, school })

  // 3. 이메일에 가입환영 템플릿 전송하기
  void sendTemplateToEmail(email, template)
  res.send("가입완료")
})

mongoose.connect('mongodb://database-service:27017/mydocker')
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

app.listen(4000)