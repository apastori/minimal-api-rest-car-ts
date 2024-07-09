import { model, Model, Schema } from "mongoose";
import { ICar } from "../Domain/ICar";

const carSchema: Schema<ICar> = new Schema<ICar>({
    color: {
        type: String,
        required: true
    },
    gas: {
        type: String,
        enum: ["gasoline", "electric"],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const carModel = model("Cars", carSchema);

export default carModel;