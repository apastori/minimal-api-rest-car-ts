import { Request, Response, NextFunction } from 'express';

import { IMiddleware } from './IMiddleware';

let startServer: IMiddleware = function(req?: Request, res?: Response, next?: NextFunction): void {
    console.log(`Express with Typescript! http://localhost:${Number(process.env.port) || 3000}`);
    console.log(process.env);
}

export { startServer }