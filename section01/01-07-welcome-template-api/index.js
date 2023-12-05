function checkEmail(email){
  return email.includes('@');
}

function getWelcomeTemplate(name, email, age, school, createdAt){
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

function sendTemplateToEmail(email, template){
  console.log(`${email} 이메일로 ${template}를 전송했습니다!!`)
}

function getToday(){
  const today =  new Date()
  const year = today.getFullYear();
  const month = today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

  return `${year}-${month}-${date}`;
}


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