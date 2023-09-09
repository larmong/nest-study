const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)


class Monster {
  power = 10

  // 생성자
  constructor(qqq) {
    this.power = qqq
  }

  attack = () => {
    console.log("공격하자!!!")
    console.log(`내 공격력은 ${this.power}이야!!!`)
  }

  run = () => {
    console.log("도망가자!!!")
  }
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa + 1);
  }

  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log("날라서 도망가자!!!")
  }
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    super(bbb);
  }

  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log("뛰어서 도망가자!!!")
  }
}



const myMonster1 = new 공중몬스터(20)
myMonster1.attack()
myMonster1.run()

const myMonster2 = new 지상몬스터(50)
myMonster2.attack()
myMonster2.run()
