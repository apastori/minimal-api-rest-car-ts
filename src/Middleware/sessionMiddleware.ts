import { Request, Response, NextFunction } from "express";
import { IMiddlewareReqExt } from "../IMiddlewareReqExt";
import { verifyToken } from "../Utils/jwt.handle";
import type { JwtPayload } from "jsonwebtoken";
import type { RequestExt } from "./RequestExt";

const checkJwt: Required<IMiddlewareReqExt> = function(req: RequestExt, res: Response, next: NextFunction) {
    try {
        const jwtByUser: string = req.headers.authorization || '';
        const jwt: string | undefined = jwtByUser.split(' ').pop();
        if (!Boolean(jwt)) throw Error("No Session in Headers");
        const isUser: string | JwtPayload = verifyToken(`${jwt!}`)
        if (!isUser) {
            res.status(401);
            res.send("JWT_NOT_VALID");
        } else  {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    } catch(e) {
        res.status(400);
        res.send("SESSION_NOT_VALID");
    }
}

export { checkJwt }