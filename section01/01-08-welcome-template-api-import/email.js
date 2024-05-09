import { getToday } from "./utils.js";

export function checkEmail(email){
  if(!email || !email.includes("@")){
    console.log("error! 이메일을 확인해주세요!");
    return false;
  }
  return true;
}

export function getWelcomeTemplate({ name, age, school }){
  return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `
}

export function sendTokenToEmail({ email, template }){
  console.log(`
    "${email}"이메일로 
    ${template}
    가입환영 템플릿을 전송했습니다!
  `);
}