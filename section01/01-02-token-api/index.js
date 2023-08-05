// 1. 기능은 잘 작동하지만 안좋은 예
function createTokenOfPhoneX(num) {
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  if(num.length >= 10){
    if(num.length <= 11){
      // 2. 핸드폰 토큰 6자리 만들기
      const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
      console.log(result)

      // 3. 핸드폰번호에 토큰 전송하기
      console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`)
    } else {
      console.log("핸드폰번호를 확인해주세요!!")
    }
  } else {
    console.log("핸드폰번호를 확인해주세요!!")
  }
}


// 2. 실무에서 사용하기 좋은 예
function createTokenOfPhone(num) {
  // 1. 휴대폰번호 자릿수 맞는지 확인(10~11자리)
  if(num.length < 10 || num.length > 11){
    // early-exit : 먼저 에러를 찾아서 함수를 종료하기
    console.log("핸드폰번호를 확인해주세요!!")
    return;
  } else {
    // 2. 핸드폰 토큰 6자리 만들기
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    // 3. 핸드폰번호에 토큰 전송하기
    console.log(`${num} 번호로 인증번호 ${result}를 전송합니다.`)
  }
}

createTokenOfPhone("01012341234")
