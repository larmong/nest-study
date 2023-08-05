function checkEmail(email){
  if(!email && !email.includes("@")){
    console.log("이메일을 확인해주세요!")
    return false
  } else {
    return true
  }
}

function getTemplate({ name, age, school, createdAt }) {
  const result = `
    <div>
        <h1>${name}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </div>
  `
  return result
}

function sendTemplateToEmail(email, template){
  console.log(`${email}으로 ${template}을 전송합니다.`)
}

function getToday() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0")
  let date = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${date}`
}



function createUser({ name, age, school, email, createdAt }){
  // 1. 이메일이 정상인지 확인(존재여부, "@"포함여부)
  const isValid = checkEmail(email)
  if(!isValid) return

  // 2. 가입환영 템플릿 만들기
  const template = getTemplate({ name, age, school, createdAt })

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, template)

}



const name = "철수"
const age = 12
const school = "다람쥐초등학교"
const email = "a@a.com"
const createdAt = getToday()
createUser({ name, age, school, email, createdAt })
