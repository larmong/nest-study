// 안좋은 예
function createTokenOfPhone_(number){ // number: 매개변수(parameter)
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  if(number.length >= 10){
    if(number.length <= 11){
      // 2. 인증 토큰 6자리 만들기
      const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

      // 3. 인증 토큰 전송하기
      console.log(`"${number}"로 인증번호 "${result}"를 전송했습니다!`);

    } else {
      console.log("error! 핸드폰 번호를 확인해주세요!");
    }
  } else {
    console.log("error! 핸드폰 번호를 확인해주세요!");
  }
}

// 좋은 예
function createTokenOfPhone(number){ // number: 매개변수(parameter)
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  if(number.length < 10 || number.length > 11){
    console.log("error! 핸드폰 번호를 확인해주세요!");
    return;
  }

  // 2. 인증 토큰 6자리 만들기
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  // 3. 인증 토큰 전송하기
  console.log(`"${number}"로 인증번호 "${result}"를 전송했습니다!`);
}

createTokenOfPhone("01011112222"); // 01011112222: 인자(argument)