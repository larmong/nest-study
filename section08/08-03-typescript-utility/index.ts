interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 === 타입에 모두 ? 붙음
type aaa = Partial<IProfile>;

// 2. Required 타입 === 타입 모두 필수
type bbb = Required<IProfile>;

// 3. Pick 타입 === 타입 골라서 사용
type ccc = Pick<IProfile, 'name' | 'age'>;

// 4. Omit 타입 === 타입 제외
type ddd = Omit<IProfile, 'school'>;

// 5. Union 타입 === 철수, 영희, 훈이만 가능
type eee = '철수' | '영희' | '훈이';
let child1: eee = '철수';
let child2: string = '사과';

// 6. Record 타입 === eee의 value들이 key로 바뀌고 오른쪽에 있는 값이 타입으로 변경
type fff = Record<eee, IProfile>;

// 7. 갹체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: ggg = 'age';

// 8 type VS interface 차이  ===  interface는 선언 병합으로 추가 됨
interface IProfile {
  candy: number;
}
let profile: Partial<IProfile> = {
  candy: 10,
};
