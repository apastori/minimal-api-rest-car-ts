import { Response, NextFunction } from "express";
import { RequestExt } from "./Middleware/RequestExt";

export interface IMiddlewareReqExt {
    (req?: RequestExt, res?: Response, next?: NextFunction): void
}