export class ProductController {
  cashService;
  productService;

  constructor(cashService, productService) {
    this.cashService = cashService
    this.productService = productService
  }

  // 상품 구매하기 API
  buyProduct = (req, res) => {
    // 1. 가진 돈 검증하는 코드
    const hasMoney = this.cashService.checkValue()

    // 2. 판매 여부 검증하는 코드
    const isSoldOut =  this.productService.checkSoldOut()

    // 3. 상품 구매하는 코드
    if(hasMoney && !isSoldOut){
      res.send("상품 구매 완료!!")
    }
  }

  // 상품 환불하기 API
  refund = (req, res) => {
    // 1. 판매 여부 검증하는 코드
    const isSoldOut =  this.cashService.checkValue()

    // 2. 상품 환불하는 코드
    if(isSoldOut){
      res.send("상품 환불 완료!!")
    }
  }
}
