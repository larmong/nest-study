import {getToday} from "./util.js";

export function checkEmail(email){
  if(!email && !email.includes("@")){
    console.log("이메일을 확인해주세요!")
    return false
  } else {
    return true
  }
}

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

export function sendTemplateToEmail(email, template){
  console.log(`${email}으로 ${template}을 전송합니다.`)
}
