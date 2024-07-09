import { Request, Response, NextFunction } from "express";

import { IncomingHttpHeaders } from 'http';

import { IMiddleware } from "../IMiddleware";

const logMiddleware: Required<IMiddleware> = function(req: Request, res: Response, next: NextFunction) {
    console.log("Log Functionality");
    const header: IncomingHttpHeaders = req.headers;
    const userAgent = header["user-agent"];
    console.log("user-agent", userAgent);
    next();
}

export { logMiddleware }