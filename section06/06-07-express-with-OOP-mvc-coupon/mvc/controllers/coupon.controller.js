import { CashService } from "./services/cash.service.js";

export class CouponController {
  // 상품권 구매하기 API
  buyCoupon = (req, res) => {
    // 1. 돈이 있는지 검증
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();

    // 2. 상품권 구매
    if(hasMoney){
      res.send("상품권 구매 완료")
    }
  }
}