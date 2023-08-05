function checkPhone(num){
  if(num.length < 10 || num.length > 11){
    console.log("핸드폰번호를 확인해주세요!!")
    return false
  } else {
    return true
  }
}

function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  console.log(result)
  return result
}

function sendTokenToSMS(num, token){
  console.log(`${num} 번호로 인증번호 ${token}를 전송합니다.`)
}

// 퍼사드패턴(facade)
function createTokenOfPhone(num) {
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  const isValid = checkPhone(num)
  if(!isValid) return

  // 2. 핸드폰 토큰 6자리 만들기
  const token = getToken()

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(num, token)
}

createTokenOfPhone("01012341234")
