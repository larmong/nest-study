// 1. 회원가입을 축하하는 형태의 템플릿을 출력하는 함수를 만들어 주세요.
//     a. [ 이메일 / 주민번호 / 휴대폰 번호 / 내가 좋아하는 사이트 ] 를 함수의 입력으로 받고, 해당 내용이 html 태그가 포함된 텍스트로 콘솔에 출력되어야 합니다.

import { customRegistrationNumber } from "./validation.js";

const template = ({ name, email, registrationNum, phoneNum }) => {
  const result = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr />
        <div>이메일: ${email}</div>
        <div>주민번호: ${customRegistrationNumber(registrationNum)}</div>
        <div>휴대폰번호: ${phoneNum}</div>
      </body>
    </html>
    `;

  return console.log(result);
};

template({
  name: "이루이",
  email: "lulu@gamiel.com",
  registrationNum: "200810-1223344",
  phoneNum: "01011112222",
});
