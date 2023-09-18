import express from "express"
import { ProductController } from "./mvc/controllers/product.contriller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express()

/*
  의존성 주입의 장점
  1. new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴) : 메모리 효율 증가
  2. 의존성 주입으로 안전하게 다른 서비스로 변경 가능

  [ 부가설명 ]
  1. productController가 cashService에 의존하고 있음(CashService => 의존성)
     => 이 상황을 "강하게 결합되어있다" 라고 표현
     => tight-coupling
  2. 이를 개선하기 위해서 "느슨한 결합"으로 변경 할 필요가 있음
     => loose-coupling
     => 이를 "의존성주입"으로 해결(의존성주입: Dependency-Injection. DI)
     => 이 역할을 대신 해주는 NestJs 기능: IoC 컨테이너 (알아서 DI 해줌)
                                    => IoC: Inversion-Of-Control
  3. "의존성주입"으로 "싱글톤패턴" 구현 가능해짐
     => "의존성주입"이면, "싱글톤패턴"인가? No!
 */
const cashService = new CashService()
const pointService = new PointService()
const productService = new ProductService()

// 상품 API
const productController = new ProductController(cashService, productService);
app.post('/products/buy', productController.buyProduct)  // 상품 구매하기 API
app.post("/products/refund",  productController.refund)  // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon)  // 쿠폰(상품권) 구매하기 API

// 게시판 API
// app.get("")

app.listen(3000)
