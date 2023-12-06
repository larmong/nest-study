export function checkPhone(phone){
  if(phone.length < 10 || phone.length > 11){
    console.log("핸드폰번호를 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
}

export function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  return result;
}

export function sendTokenToSMS(phone, token){
  console.log(`${phone} 번호로 인증번호 ${token}을 전송했습니다!!`)
}