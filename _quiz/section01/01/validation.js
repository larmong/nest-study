export const checkHyphen = (value) => {
  if (value !== "-") {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  }

  return true;
};

export const checkValueLength = (value) => {
  if (!(value[0].length === 6 && value[2].length === 7)) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  }

  return true;
};
