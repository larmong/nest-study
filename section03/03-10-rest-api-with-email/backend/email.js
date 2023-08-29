import nodemailer from "nodemailer"
import {getToday} from "./util.js";

export function checkEmail(email){
  if(!email && !email.includes("@")){
    console.log("이메일을 확인해주세요!")
    return false
  } else {
    return true
  }
}


// 구글,네이버 등에 따라서 css 적용이 될수도 안될수도 있으니 css 구버전으로 하는게 좋음(ex. flex)
export function getTemplate({ name, age, school }) {
  const result = `
    <div>
        <h1>${name}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </div>
  `
  return result
}

export async function sendTemplateToEmail(email, template){
  const AUTH_MAIL = process.env.AUTH_MAIL;
  const AUTH_USER = process.env.AUTH_USER;
  const AUTH_PASS = process.env.AUTH_PASS;

  const transporter = nodemailer.createTransport({
    service: AUTH_MAIL,
    auth: {
      user: AUTH_USER,
      pass: AUTH_PASS
    }
  })
  const result = await transporter.sendMail({
    from: "larmong0@gmail.com",
    to: email,
    subject: "[테스트] 가입을 축하드립니다!",
    html: template
  })
  console.log(result)
  // console.log(`${email}으로 ${template}을 전송합니다.`)
}
