import { CashService } from "./services/cash.service.js";

export class CouponController {

  // 쿠폰(상품권) 구매하기 API
  buyCoupon = (req, res) => {
    // 1. 가진 돈 검증하는 코드
    const cashService = new CashService()

    // 2. 쿠폰(상품권) 구매 코드
    if(cashService){
      res.send("쿠폰(상품권) 구매 완료!!")
    }
  }
}
