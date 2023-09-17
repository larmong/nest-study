import express from "express"
import { ProductController } from "./mvc/controllers/product.contriller.js";

const app = express()


// 상품 API
const productController = new ProductController();
app.post('/products/buy', productController.buyProduct)  // 상품 구매하기 API
app.post("/products/refund",  productController.refund)  // 상품 환불하기 API

// 게시판 API
// app.get("")

app.listen(3000)
