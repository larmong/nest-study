const checkHyphen = (value) => {
  if (value !== "-") {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  }

  return true;
};

const checkValueLength = (value) => {
  if (!(value[0].length === 6 && value[2].length === 7)) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  }

  return true;
};

export const customRegistrationNumber = (value) => {
  const splitValue = value.split(/(-)/);

  // 주민번호 가운데가 ”-”로 구성되어야 합니다.
  const isHyphen = checkHyphen(splitValue[1]);
  if (!isHyphen) return;

  // 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
  const isValueLength = checkValueLength(splitValue);

  // 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
  if (isValueLength) {
    return `${splitValue[0]}-${splitValue[2][0].padEnd(6, "*")}`;
  }
};
