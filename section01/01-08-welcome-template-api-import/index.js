import { checkEmail, getWelcomeTemplate, sendTokenToEmail } from "./email.js";

function createUser({ name, age, school, email }){
  // 1. 이메일이 정상인지 확인(1. 존재여부, 2. "@" 포함 여부)
  const isEmail = checkEmail(email);
  if(!isEmail) return;

  // 2. 가입 환영 템플릿 만들기
  const template = getWelcomeTemplate({ name, age, school });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTokenToEmail({ email, template })
}

const newUser = {
  name: "철수",
  age: "8",
  school: "다람쥐초등학교",
  email: "a@a.com",
}

createUser(newUser);