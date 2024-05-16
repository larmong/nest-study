export class TokenController {
  phoneService;
  tokenAuthService;

  constructor(phoneService, tokenAuthService) {
    this.phoneService = phoneService;
    this.tokenAuthService = tokenAuthService;
  }

  // 토큰 인증 요청 API
  createToken = async (req, res) => {
    const { phone } = req.body;

    // 1. 핸드폰 번호 입력 검증
    const isPhone = this.phoneService.checkPhone(phone);
    if (!isPhone) return res.status(422).send("핸드폰번호를 확인해주세요!");

    // 2. 토큰 생성
    const token = this.tokenAuthService.createToken();

    // 3. 토큰 전송 + 데이터 저장
    await this.tokenAuthService.sendToken(phone, token);

    res.send(`입력하신 핸드폰 번호로 인증번호가 전송되었습니다! 😎`);
  };

  // 인증 완료 API
  completeToken = async (req, res) => {
    const { phone, token } = req.body;

    // 1. 핸드폰 번호 입력 검증
    const isPhone = this.phoneService.checkPhone(phone);
    if (!isPhone) return res.status(422).send("핸드폰번호를 확인해주세요!");

    // 2. 토큰 검증 + 데이터 수정
    const isToken = this.tokenAuthService.checkToken(phone, token);
    if (!isToken) return res.status(422).send("인증번호가 일치하지 않습니다!");

    res.send(`핸드폰번호가 인증되었습니다! 😎`);
  };
}
