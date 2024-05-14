// 1. 문자, 숫자, 불린 기본타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const primitiveResult = getPrimitive('철수', 123, true);

//
//
//

// 2. any 타입 (자바스크립트랑 같음)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨(오류 방지 불가)
  return [arg3, arg2, arg1];
};

const anyResult = getAny('철수', 123, true);

//
//
//

// 3. unknown 타입 (any보다는 안전함)
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === 'number') {
    console.log(arg1 + 100);
  }
  return [arg3, arg2, arg1];
};

const unknownResult = getUnknown('철수', 123, true);

//
//
//

// 4. generic 타입
function getGeneric<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const genericResult = getGeneric<string, number, boolean>('철수', 123, true); // 사용할 때 타입 명시 가능!

//
//
//

// 4. generic 타입 - 2 (타입 이름 T1, T2, T3 등 아무거나 가능)
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const genericResult2 = getGeneric2<string, number, boolean>('철수', 123, true); // 사용할 때 타입 명시 가능!

//
//
//

// 4. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const genericResult3 = getGeneric2<string, number, boolean>('철수', 123, true); // 사용할 때 타입 명시 가능!

//
//
//

// 4. generic 타입 - 4 (화살표 함수)
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const genericResult4 = getGeneric2<string, number, boolean>('철수', 123, true); // 사용할 때 타입 명시 가능!
