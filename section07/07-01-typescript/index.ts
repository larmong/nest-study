// 타입 추론
let aaa = "안녕하세요"
aaa = 3

// 타입 명시
let bbb: string = "반가워"
bbb = 10

// 타입 명시가 필요한 상황
let ccc: number | string = 1000
ccc = "1000원"

let ddd: number = 10
ddd = "철수"

let eee: boolean = true
eee = false
eee = "false" // true로 작동함

// 배열 타입
let fff: number[] = [1, 2, 3, 4, "a"]
let ggg: string[] = [1, '2', '3', '4', "a"]
let hhh: (number | string)[] = [1, '2', '3', '4', "a"]

// 객체타입
interface IProfile {
  name: string
  age: number | string
  school: string
  hobby?: string
}
const Profile: IProfile = {
  name: "철수",
  ager: 8,
  school: "다람쥐초등학교"
}

// 함수타입 => 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시, 타입명시 필요!!!)
function add(num1: number, num2: number, unit: string): string{
  return num1 + num2 + unit;
}

add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!z



const add2 = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
}

add2(1000, 2000, "원")