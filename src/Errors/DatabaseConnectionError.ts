export class DatabaseConnectionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Error establishing Database connection";
        Error.captureStackTrace(this, this.constructor);
    }
}