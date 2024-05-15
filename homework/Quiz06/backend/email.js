import nodemailer from "nodemailer";
import { getToday } from "./utils.js";

export function checkEmail(email) {
  if (!email.includes("@")) {
    console.log("이메일을 확인해주세요!");
    return false;
  }
  return true;
}

export function getWelcomeTemplate(name, email, phone) {
  return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>이메일: ${email}</div>
        <div>휴대폰번호: ${phone}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `;
}

export async function sendTemplateToEmail(email, template) {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: email,
    subject: "[테스트] 가입을 축하합니다!",
    html: template,
  });

  console.log(result);
}
