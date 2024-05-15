import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use("/quiz-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/users", (req, res) => {
  const data = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "eee@gmail.com",
      name: "영희",
      phone: "010-7777-5678",
      personal: "220110-12313123",
      prefer: "https://naver.com",
    },
    {
      email: "kkk@gmail.com",
      name: "루이",
      phone: "010-4444-5678",
      personal: "220110-7676444",
      prefer: "https://naver.com",
    },
    {
      email: "hhh@gmail.com",
      name: "훈이",
      phone: "010-3333-5678",
      personal: "220110-3338888",
      prefer: "https://naver.com",
    },
    {
      email: "lulu@gmail.com",
      name: "루루",
      phone: "010-1111-5678",
      personal: "220110-5353999",
      prefer: "https://naver.com",
    },
  ];

  res.send(data);
});

app.get("/starbucks", (req, res) => {
  const data = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드브루", kcal: 15 },
    { name: "돌체라떼", kcal: 346 },
    { name: "카라멜라떼", kcal: 160 },
    { name: "바닐라라떼", kcal: 1 },
    { name: "에스프레소", kcal: 700 },
    { name: "디카페인", kcal: 4 },
    { name: "오트라떼", kcal: 300 },
  ];

  res.send(data);
});

app.listen(3000);
