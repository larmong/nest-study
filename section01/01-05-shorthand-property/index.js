function qqq(aaa){
  console.log(aaa)         // profile 객체
  console.log(aaa.name)    // 철수
  console.log(aaa.age)     // 12
  console.log(aaa.school)  // 다람쥐초등학교
}

// const profile = {
//   name: "철수",
//   age: "12",
//   school: "다람쥐초등학교",
//   createdAt: "2024-05-09",
// }

const name = "철수";
const age = "12";
const school = "다람쥐초등학교";
const createdAt = "2024-05-09";

const profile = { name, age, school, createdAt };  // key === value : shorthand-property

qqq(profile);                                 // 1. 변수에 담아서 보내주기
qqq({ name, age, school, createdAt });    // 2. 통째로 보내주기
                                              // 1번과 2번 결과는 동일