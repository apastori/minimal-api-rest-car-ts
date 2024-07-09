import type { Express } from "express";

import { startServerCallback } from "./startServerCallback";

import { ExpressServerStartError } from "./Errors/ExpressServerStartError";

const startExpressServer = (app: Express, port: number) => {
    app.listen(port, startServerCallback).on('error', (error) => {
        throw new ExpressServerStartError(error.message);
    })
}

export { startExpressServer }