import { Request, Response } from "express";
import userService from "./user.service";

const createUserController = async(req : Request, res :Response) => {
    const user = req.body;
    const result = await userService.createUser(user);
    if(result){
        return res.status(200).json({
            message: 'User created successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error creating User',
            status: false,
            code: 501
        })
    }
};

const getAllUser = async(req : Request, res:Response) => {
    const result = await userService.getUsers();
    if(result){
        return res.status(200).json({
            message: 'User created successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error creating User',
            status: false,
            code: 501
        })
    }
}

export const controller ={
    createUserController,
    getAllUser
};