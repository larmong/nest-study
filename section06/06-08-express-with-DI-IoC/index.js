import express from 'express'
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";

const app = express()


const cashService = new CashService;


// 상품 API
const productController = new ProductController(cashService)
app.post('/products/buy', productController.buyProduct)  // 상품 구매하기 API
app.post('/products/refund', productController.refundProduct)  // 상품 환불하기 API


// 쿠폰(상품권) API
const couponController = new CouponController
app.post('/coupons/buy', couponController.buyCoupon)  // 쿠폰(상품권) 구매하기 API



// 게시판 API

app.listen(3000)