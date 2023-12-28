interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입  ===>  전부 ? 붙어짐
type aaa = Partial<IProfile>;


// 2. Required 타입  ===>  전무 필수가 됨
type bbb = Required<IProfile>;


// 3. Pick 타입  ===>  골라서 사용 할 수 있음
type ccc = Pick<IProfile, "name" | "age">;


// 4. Omit 타입  ===>  제외해서 사용 할 수 있음
type ddd = Omit<IProfile, "school">;



// 5. Record 타입  ===>  제외해서 사용 할 수 있음
type eee = "철수" | "영희" | "훈이"  // Union 타입
let child1: eee = "철수";  // 철수, 영희, 훈이만 됨
let child2: string = "사과";  // 모든 스트링 사용 가능 함

type fff = Record<eee, number> // Record 타입 ===> eee 값이 각각 key로 변하고 number 타입으로 변함



// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile;  // "name" | "age" | "school" | "hobby" 값만 넣을 수 있음


// 7. type VS interface 차이  :::: interface 는 선언 병합이 됨!
interface IProfile {
  candy: number;  // 선언 병합으로 추가 됨
}

let profile: Partial<IProfile> = {
  candy: 10
}
