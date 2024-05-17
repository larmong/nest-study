import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";

import { options } from "./swagger/config.js";

import { UserController } from "./controllers/user.controller.js";
import { TokenController } from "./controllers/token.controller.js";

import { PersonalService } from "./controllers/services/personal.service.js";
import { EmailService } from "./controllers/services/email.service.js";
import { TokenAuthService } from "./controllers/services/tokenAuth.service.js";
import { PhoneService } from "./controllers/services/phone.service.js";
import { MetaService } from "./controllers/services/meta.service.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/mini-project", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

const personalService = new PersonalService();
const emailService = new EmailService();
const phoneService = new PhoneService();
const tokenAuthService = new TokenAuthService();
const metaService = new MetaService();

// 유저 API
const userController = new UserController({
  personalService, //
  emailService,
  phoneService,
  tokenAuthService,
  metaService,
});
app.get("/users", userController.getUser);
app.post("/users", userController.createUser);

// 토큰 인증 API
const tokenController = new TokenController({
  phoneService, //
  tokenAuthService,
});
app.post("/tokens/phone", tokenController.createToken);
app.patch("/tokens/phone", tokenController.completeToken);

mongoose.connect("mongodb://mini-project-mongodb:27017/mini-project");

app.listen(3000);
