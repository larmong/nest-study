// 1. 현재 날짜와 시간을 출력하는 함수를 하나 만들고, 해당 함수를 실행하면 **`현재 시간`**으로
// (예시: “오늘은 2022년 03월 15일 11:30:29입니다.”) 같은 포맷의 메시지가 콘솔에 출력되도록 만들어 주세요.

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const dateArr = {
    month: today.getMonth() + 1,
    day: today.getDate(),
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
  };
  const { month, day, hours, minutes, seconds } = dateArr;

  Object.entries(dateArr).forEach(([key, value]) => {
    dateArr[key] = String(value).padStart(2, "0");
  });

  return console.log(`오늘은 ${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}입니다.`);
};

getToday();
