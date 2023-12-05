function createTokenOfPhone(phone){  // 매개변수(parameter)
  // // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  // if(phone.length  >= 10 && phone.length <= 11){
  //   // 2. 핸드폰 토큰 6자리 만들기
  //   const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  //   // 3. 핸드폰번호로 토큰 전송하기
  //   console.log(`${phone} 번호로 인증번호 ${result}를 전송했습니다!!`)
  // } else {
  //   console.log("핸드폰번호를 제대로 입력해 주세요!!")
  // }


  if(phone.length < 10 || phone.length > 11){
    console.log("핸드폰번호를 제대로 입력해 주세요!!");
    return;
  }

  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  console.log(`${phone} 번호로 인증번호 ${result}를 전송했습니다!!`)
}

createTokenOfPhone("010123123")  // 인자(argument)