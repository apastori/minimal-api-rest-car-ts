import { connect } from "mongoose";

async function connectDB(): Promise<void> {
    const connectionString: string = `mongodb://${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`;
    await connect(connectionString)
}

export { connectDB }