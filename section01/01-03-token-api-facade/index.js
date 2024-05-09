function checkPhone(number){
  if(number.length < 10 || number.length > 11){
    console.log("error! 핸드폰 번호를 확인해주세요!");
    return false;
  }
  return true;
}

function getToken(){
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

function sendTokenToSMS(number, token){
  console.log(`"${number}"로 인증번호 "${token}"를 전송했습니다!`);
}

function createTokenOfPhone(number){
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  const isPhone = checkPhone(number);
  if(!isPhone) return;

  // 2. 인증 토큰 6자리 만들기
  const token = getToken();

  // 3. 인증 토큰 전송하기
  sendTokenToSMS(number, token)
}

createTokenOfPhone("01011112222");