import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";

import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS, findPhone, tokenAuth } from "./phone.js";
import { hyphenAddToPhone } from "./common/utils.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/quiz-09", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.post("/tokens/phone", async (req, res) => {
  const phone = req.body.phone;

  const isValid = checkPhone(phone);
  if (!isValid) return;

  const token = getToken();
  void sendTokenToSMS(phone, token);

  // * 이미 같은 번호로 token 저장되어있는지 확인
  //   ===> 이미 있으면 토큰만 업데이트
  //   ===> 없으면 데이터 추가
  await findPhone(phone, token);

  res.send(`"${hyphenAddToPhone(phone)}" 번호로 인증번호를 전송하였습니다!`);
});

app.patch("/tokens/phone", async (req, res) => {
  const phone = req.body.phone;
  const token = req.body.token;

  const isValid = checkPhone(phone);

  if (!(isValid && token.length === 6)) {
    res.send(`핸드폰번호 또는 인증번호를 확인해주세요!`);
    return;
  }

  await tokenAuth(phone, token);
  res.send(`핸드폰 인증에 성공하였습니다!`);
});

mongoose.connect("mongodb://quiz-mongodb:27017/quiz09");

app.listen(3000);
