export {}
// private readonly
// 원본 Monster        : 읽기 o, 쓰기 x
// 자식 ChangeMonster  : 읽기 x, 쓰기 x
// 함수 밖              : 읽기 x, 쓰기 x

// class Monster {
//     // power = 10;                       ===>   public, private, protected, readonly 중에 1개라도 있으면 생략 가능!
//
//     constructor(private readonly power: any) {
//         // this.power = power;           ===>   public, private, protected, readonly 중에 1개라도 있으면 생략 가능!
//     }
//
//     attack1(){
//         console.log("공격하자!!!")
//         console.log(`내 공격력은 ${this.power}야!!!`)
//         this.power = 30;
//     }
// }
//
// class ChangeMonster extends Monster {
//     attack2(){
//         console.log("공격하자!!!")
//         console.log(`내 공격력은 ${this.power}야!!!`)
//         this.power = 30;
//     }
// }
//
// const myMonster = new ChangeMonster(20);
// myMonster.attack1();
// myMonster.attack2();
// console.log(myMonster.power);
//
// myMonster.power = 10;
