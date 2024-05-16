import coolsms from "coolsms-node-sdk";
const smsService = coolsms.default;

export function checkValidationPhone(myphone) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

export async function sendTokenToSMS(phoneNum, tokenNum) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new smsService(SMS_KEY, SMS_SECRET);
  const result = await messageService.sendOne({
    to: phoneNum,
    from: SMS_SENDER,
    text: `[테스트] 요청하신 인증번호는 ${tokenNum} 입니다.`,
  });

  console.log(result);
}
