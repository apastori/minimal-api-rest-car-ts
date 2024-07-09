import { ICar } from "../Domain/ICar";
import carModel from "../Models/carModel";

const insertCarService = async (car: ICar) => {
    const responseInsert = await carModel.create(car);
    return responseInsert;
}

const listCarsService = async () => {
    const responselistCars = await carModel.find({});
    return responselistCars;
}

const findCarService = async (id: string) => {
    const responseFindCar = await carModel.findOne({_id: id});
    return responseFindCar;
}

const updateCarService = async (id: string, data: ICar) => {
    const responseUpdateCar = await carModel.findOneAndUpdate(
        {_id : id}, 
        data,
        {
            new: true
        }
    );
    return responseUpdateCar;
}

const deleteCarService = async (id: string) => {
    const responseFindCar = await carModel.deleteOne({_id: id});
    return responseFindCar;
}

export { insertCarService, listCarsService, findCarService, updateCarService, deleteCarService }