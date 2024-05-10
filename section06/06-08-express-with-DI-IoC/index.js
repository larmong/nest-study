import express from 'express';

import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express();

// ===== 의존성 주입 장점 =====
// 1. new 한번으로 모든곳에서 재사용 가능 (const cashService = new CashService()) : 싱글톤패턴
// 2. 의존성 주입으로 한번에 변경 가능 (cashService ===> pointService)

const cashService = new CashService();
const pointService = new PointService();
const productService = new ProductService();

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct)         // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct)   // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon)            // 상품권 구매하기 API

// 게시판 API
// app.post("/boards/...")

app.listen(3000);