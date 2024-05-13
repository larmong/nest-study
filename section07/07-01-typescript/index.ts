export {}

// 1-1. 타입 추론
let aaa = "안녕하세요";
// aaa = 3;

// 2-1. 타입 명시
let bbb: string = "안녕하세요";
// bbb = 3;

// 2-2. 타입 명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원";

// 2-3. 숫자 타입
let ddd: number = 1000;
// ddd = "철수";

// 2-4. 불린 타입
let eee: boolean = true;
eee = false;
// eee = "false"; // true로 작동함

// false로 작동하는 예)
// 0
// ""
// NaN
// null
// undefined

// 배열타입
// let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
// let ggg: string[] = ["철수", "영희", "훈이", 10];
let hhh: (string | number)[] = ["철수", "영희", "훈이", 10];

// 객체타입
interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
}
const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
}
profile.name = "훈이";
profile.age = "8살";
profile.hobby = "수영";

// 함수타입 ===> 함수는 타입 추론 x, 반드시 타입명시 필요!!
function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
}

// add("1000", 2000, "원")
add(1000, 2000, "원")

const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!s

// 함수타입 ===> 함수는 타입 추론 x, 반드시 타입명시 필요!!
const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
}

// any 타입 === 자바스크립트
let qqq: any = "철수";
qqq = 123;
qqq = true;
