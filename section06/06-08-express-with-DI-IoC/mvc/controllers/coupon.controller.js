export class CouponController {
  cashService;

  constructor(cashService) {
    this.cashService = cashService;
  }

  // 상품권 구매하기 API
  buyCoupon = (req, res) => {
    // 1. 돈이 있는지 검증
    const hasMoney = this.cashService.checkValue();

    // 2. 상품권 구매
    if(hasMoney){
      res.send("상품권 구매 완료")
    }
  }
}