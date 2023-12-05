import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'

function createUser({ name, age, school, email }){
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함 여부)
  const isValid = checkEmail(email);
  if(!isValid) return;

  // 2. 가입환영 템픔릿
  const template = getWelcomeTemplate(name, email, age, school)

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, template)
}

const user = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
  email: "a@a.com",
}
createUser(user)