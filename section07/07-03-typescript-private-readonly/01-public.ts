// // public, private, protected, readonly
//
//
// class Monster2 {
//   // power;    =>    public, private, protected, readonly 중 한개라도 있으면 생략 가능
//
//   constructor(public power: any) {
//     // this.power = power    =>    public, private, protected, readonly 중 한개라도 있으면 생략 가능
//   }
//
//   attack1 = () => {
//     console.log("공격하자!!!")
//     console.log(`내 공격력은 ${this.power}야!!`) // 안에서 접근 가능
//     this.power = 30  // 안에서 수정 가능
//   }
// }
//
//
// class 공중몬스터2 extends Monster2 {
//   attack2 = () => {
//     console.log("공격하자!!!")
//     console.log(`내 공격력은 ${this.power}야!!`) // 자식이 접근 가능
//     this.power = 30  // 자식이 수정 가능
//   }
// }
//
//
// const myMonster22 = new 공중몬스터2(20)
// myMonster22.attack1()
// myMonster22.attack2()
// console.log(myMonster22.power) // 밖에서 접근 가능
// myMonster22.power = 10; // 밖에서 수정 가능