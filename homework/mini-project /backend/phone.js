import { Token } from "./models/token.model.js";

export const checkPhone = (value) => {
  if (value.length < 10 || value.length > 11) {
    console.log("핸드폰 번호를 확인해주세요!");
    return false;
  }
  return true;
};

export const getToken = () => {
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
};

export const sendTokenToSMS = (value, token) => {
  // 핸드폰번호로 인증번호 보내는 로직 생략 + mongodb 저장
};

export const findPhone = async (value, token) => {
  try {
    const phone = await Token.findOne({ phone: value });
    if (!phone) {
      const createData = new Token({
        token: token,
        phone: value,
        isAuth: false,
      });
      await createData.save();

      return;
    }

    phone.token = token;
    await phone.save();
  } catch (error) {
    console.error(`(${error}) 관리자에게 문의 부탁드립니다.`);
  }
};

export const tokenAuth = async (value, token) => {
  try {
    const phone = await Token.findOne({ phone: value });
    if (!phone) {
      return false;
    }
    if (phone.token !== token) {
      return false;
    }

    phone.isAuth = true;
    await phone.save();
    return true;
  } catch (error) {
    console.error(`(${error}) 관리자에게 문의 부탁드립니다.`);
  }
};
