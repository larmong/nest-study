export function checkPhone(number){
  if(number.length < 10 || number.length > 11){
    console.log("error! 핸드폰 번호를 확인해주세요!");
    return false;
  }
  return true;
}

export function getToken(){
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

export function sendTokenToSMS(number, token){
  console.log(`"${number}"로 인증번호 "${token}"를 전송했습니다!`);
}