import { Request, Response } from "express";
import { findCarService, insertCarService, listCarsService, updateCarService, deleteCarService } from "../Services/carServices";
import { handleHttp } from "../Utils/error.handle";

const getCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const getCarsResponse = await findCarService(id!);
        const responseFinal = getCarsResponse ? getCarsResponse : "NOT_FOUND"
        res.send(responseFinal);
    } catch(e) {
        handleHttp(res, "ERROR_GET_CAR");
    }
}

const getCars = async (req: Request, res: Response) => {
    try {
        const getCarsResponse = await listCarsService();
        res.send(getCarsResponse);
    } catch(e) {
        handleHttp(res, "ERROR_GET_CARS");
    }
}

const postCar = async (req: Request, res: Response) => {
    try {
        //check if req.body fits Car Schema
        const insertCarResponse = await insertCarService(req.body);
        res.send(insertCarResponse);
    } catch(e) {
        handleHttp(res, "ERROR_POST_CAR")
    }
}

const updateCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const getCarsResponse = await updateCarService(id!, data);
        res.send(getCarsResponse);
    } catch(e) {
        handleHttp(res, "ERROR_UPDATE_CAR");
    }
}

const deleteCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteCarResponse = await deleteCarService(id!);
        res.send(deleteCarResponse);
    } catch(e) {
        handleHttp(res, "ERROR_DELETE_CAR");
    }
}

export { getCar, getCars, postCar, updateCar, deleteCar }