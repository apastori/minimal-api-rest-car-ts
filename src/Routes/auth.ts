import { Response, Request, Router } from "express";

import { login, registration } from "../Controllers/authController";

const router: Router = Router();

router.post("/register", registration);

router.post("/login", login);

export { router }