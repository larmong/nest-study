import 'dotenv/config'
import coolsms from "coolsms-node-sdk"
const mysms = coolsms.default

export function checkPhone(num){
  if(num.length < 10 || num.length > 11){
    console.log("핸드폰번호를 확인해주세요!!")
    return false
  } else {
    return true
  }
}

export function getToken(){
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;

  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  return void result
}

export async function sendTokenToSMS(num, token){
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  const result = await messageService.sendOne({
    to: num,
    from: SMS_SENDER,
    text: `[테스트] 요청하신 인증번호는 ${token} 입니다.`
  })
  console.log(result)

  // console.log(`${num} 번호로 인증번호 ${token}를 전송합니다.`)
}

