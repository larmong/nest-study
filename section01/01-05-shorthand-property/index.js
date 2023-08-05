function qqq(profile){
  console.log(profile)
  console.log(profile.name)
  console.log(profile.age)
  console.log(profile.school)
}



const name = "철수"
const age = 12
const school = "다람쥐초등학교"

// const profile = {
//   name: name,
//   age: age,
//   school: school
// }

// key 와 value 가 같아서, 벨류를 생략함 => shorthand-property
const profile = { name, age, school }


qqq(profile) // 1. 변수에 담아서 보내주기
qqq({ name, age, school }) // 2. 그냥 통째로 보내주기

// 1번과 2번의 결과는 동일함!!
