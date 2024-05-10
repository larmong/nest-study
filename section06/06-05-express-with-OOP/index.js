import express from 'express';
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 돈이 있는지 검증
  const cashService = new CashService();
  const hasMoney = cashService.checkValue();

  // 2. 판매 여부 검증
  const productService = new ProductService();
  const isSoldOut = productService.checkSoldOut();

  // 3. 상품 구매
  if(hasMoney && !isSoldOut){
    res.send("상품 구매 완료")
  }
})

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매 여부 검증
  const productService = new ProductService();
  const isSoldOut = productService.checkSoldOut();

  // 2. 상품 환불 (대략 10줄)
  if(isSoldOut){
    res.send("상품 환불 완료")
  }
})

app.listen(3000);