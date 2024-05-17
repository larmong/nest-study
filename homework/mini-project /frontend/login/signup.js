let phoneNum;

// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  const firstNum = document.getElementById("PhoneNumber02").value;
  const lastNum = document.getElementById("PhoneNumber03").value;
  const fullNum = `010${firstNum}${lastNum}`;

  if (!(firstNum.length === 4 && lastNum.length === 4)) {
    return window.alert("핸드폰번호를 확인해주세요!");
  }

  axios({
    method: "post",
    url: "http://localhost:3000/tokens/phone",
    data: {
      phone: fullNum,
    },
  })
    .then(() => {
      window.alert("인증번호 전송 완료!");
      phoneNum = fullNum;
      document.querySelector("#ValidationInputWrapper").style.display = "flex";
    })
    .catch((err) => {
      console.log(err);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const email = document.getElementById("SignupEmail").value;

  if (!name) {
    return window.alert("이름을 입력해주세요!");
  }
  if (!phoneNum) {
    return window.alert("핸드폰번호를 입력해주세요!");
  }
  if (!email) {
    return window.alert("이메일을 입력해주세요!");
  }

  axios({
    method: "post",
    url: "http://localhost:3000/users",
    data: {
      email: email,
      name: name,
      phone: phoneNum,
    },
  })
    .then(() => {
      window.alert("이메일 전송 완료!");
    })
    .catch((err) => {
      console.log(err);
    });
};
