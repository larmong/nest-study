import { User } from "../models/user.model.js";

export class UserController {
  personalService;
  emailService;
  phoneService;
  tokenAuthService;
  metaService;

  constructor({
    personalService, //
    emailService,
    phoneService,
    tokenAuthService,
    metaService,
  }) {
    this.personalService = personalService;
    this.emailService = emailService;
    this.phoneService = phoneService;
    this.tokenAuthService = tokenAuthService;
    this.metaService = metaService;
  }

  // 회원 목록 조회 API
  getUser = async (req, res) => {
    const data = await User.find({});
    res.send(data);
  };

  // 회원 가입 API
  createUser = async (req, res) => {
    const { name, email, personal, prefer, password, phone } = req.body;

    // 1. 빈칸 있는지 확인
    if (!name) return res.status(422).send("이름을 입력해주세요!");
    if (!email) return res.status(422).send("이메일을 입력해주세요!");
    if (!personal) return res.status(422).send("주민번호를 입력해주세요!");
    if (!prefer) return res.status(422).send("좋아하는 사이트를 입력해주세요!");
    if (!password) return res.status(422).send("비밀번호를 입력해주세요!");
    if (!phone) return res.status(422).send("핸드폰번호를 입력해주세요!");

    // ==> 2. 주민번호 검증
    const isPersonal = this.personalService.checkPersonal(personal);
    if (!isPersonal) return res.status(422).send("주민번호를 다시 확인해주세요!");

    // ==> 3. 이메일 검증
    const isEmail = this.emailService.checkEmail(email);
    if (!isEmail) return res.status(422).send("이메일을 다시 확인해주세요!");

    // ==> 4. 핸드폰 번호 검증 / 인증 받았는지 검증(*** await 잊지 말기!!! ***)
    const isPhone = this.phoneService.checkPhone(phone);
    if (!isPhone) return res.status(422).send("핸드폰번호를 다시 확인해주세요!");

    const isToken = await this.tokenAuthService.checkAuth(phone);
    if (!isToken) return res.status(422).send("핸드폰번호 인증이 필요합니다!");

    // ==> 5. 메타 정보 가져오기
    const mataData = await this.metaService.getMeta(prefer);

    const profile = new User({
      name,
      email,
      prefer,
      password,
      phone,
      personal: isPersonal,
      og: mataData,
    });
    await profile.save();

    await res.send(`${profile._id} :: 회원가입을 축하합니다!🥳`);
  };
}
