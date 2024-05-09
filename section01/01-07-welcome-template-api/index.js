function getToday(){
  const today = new Date();

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}

function checkEmail(email){
  if(!email || !email.includes("@")){
    console.log("error! 이메일을 확인해주세요!");
    return false;
  }
  return true;
}

function getWelcomeTemplate({ name, age, school, createdAt }){
  return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `
}

function sendTokenToEmail({ email, template }){
  console.log(`
    "${email}"이메일로 
    ${template}
    가입환영 템플릿을 전송했습니다!
  `);
}


function createUser({ name, age, school, email, createdAt }){
  // 1. 이메일이 정상인지 확인(1. 존재여부, 2. "@" 포함 여부)
  const isEmail = checkEmail(email);
  if(!isEmail) return;

  // 2. 가입 환영 템플릿 만들기
  const template = getWelcomeTemplate({ name, age, school, createdAt });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTokenToEmail({ email, template })
}

const newUser = {
  name: "철수",
  age: "8",
  school: "다람쥐초등학교",
  email: "a@a.com",
  createdAt: getToday(),
}

createUser(newUser);