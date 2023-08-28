export function checkPhone(num){
  if(num.length < 10 || num.length > 11){
    console.log("핸드폰번호를 확인해주세요!!")
    return false
  } else {
    return true
  }
}

export function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  console.log(result)
  return result
}

export function sendTokenToSMS(num, token){
  console.log(`${num} 번호로 인증번호 ${token}를 전송합니다.`)
}

