import nodemailer from "nodemailer"
import { getToday } from "./utils.js";

export function checkEmail(email){
  return email.includes('@');
}

export function getWelcomeTemplate(name, email, age, school){
  const template = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이메일: ${email}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body> 
    </html>
  `
  return template;
}

export async function sendTemplateToEmail(email, template){
  // console.log(`${email} 이메일로 ${template}를 전송했습니다!!`)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    }
  })

  const result = await transporter.sendMail({
    from: "",
    to: email,
    subject: "[테스트] 가입을 축하합니다!",
    html: template
  })

  console.log(result)
}
