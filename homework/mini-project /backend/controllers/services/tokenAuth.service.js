import { Token } from "../../models/token.model.js";

export class TokenAuthService {
  createToken = () => {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  };

  sendToken = async (value, token) => {
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

    console.log(`"${value}"로 인증번호 "${token}"를 전송했습니다!`);
  };

  checkToken = async (value, token) => {
    const phone = await Token.findOne({ phone: value });

    if (!phone || phone.token !== token) {
      return false;
    }

    phone.isAuth = true;
    await phone.save();
    return true;
  };

  checkAuth = async (value) => {
    const phone = await Token.findOne({ phone: value });

    if (!phone) {
      return false;
    }

    return true;
  };
}
