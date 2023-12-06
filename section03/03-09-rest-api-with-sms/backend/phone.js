import coolsms from "coolsms-node-sdk"
const smsService = coolsms.default

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

export async function sendTokenToSMS(phone, token){
  // console.log(`${phone} 번호로 인증번호 ${token}을 전송했습니다!!`)

  const messageService = new smsService('', '');
  const result = await messageService.sendOne({
    to: phone,
    from: '',
    text: `[테스트] 요청하신 인증번호는 ${token} 입니다.`
  })
  console.log(result)

}