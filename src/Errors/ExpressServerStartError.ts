export class ExpressServerStartError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Error Express Server Start";
        Error.captureStackTrace(this, this.constructor);
    }
}