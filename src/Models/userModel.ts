import { Schema, model } from "mongoose";
import { IUser } from "../Domain/IUser";

const userSchema: Schema<IUser> = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: false,
            default: "Hola..."
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const userModel = model("users", userSchema);

export { userModel }