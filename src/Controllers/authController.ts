import { Request, Response } from "express";

import { registerNewUser, loginUser } from "../Services/authServices";

const registration = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const registerUserResponse = await registerNewUser(body);
    res.send(registerUserResponse);
}

const login = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const credentials = {
        email: body.email,
        password: body.password
    }
    const loginUserResponse = await loginUser(credentials);
    if (loginUserResponse === "Password is Incorrect") {
        res.status(403);
        res.send(loginUserResponse)
    } else {
        res.send(loginUserResponse);
    }
}

export { registration, login }