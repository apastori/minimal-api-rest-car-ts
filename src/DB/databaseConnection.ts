import { connectDB } from "./connectMongo";
import { DatabaseConnectionError } from "../Errors/DatabaseConnectionError";

export const databaseConnection = () => {
    connectDB().then(() => {
        console.log('Database Connection OK')
    })
    .catch((error) => {
        console.log('Database Connection Error')
        throw new DatabaseConnectionError(error.message)
    })
}