import { Request, Response, NextFunction } from "express"
import { getRepository } from "typeorm"
import { Item } from "../entity/Item"

export const getAll=async (request:Request, response: Response, nexr:NextFunction)=>{
    const data = await getRepository(Item).find({
        order: {
          name: "ASC",
          price: "ASC",
        }
    });
    return response.json(data);
}

export const getData = async (req:Request,res:Response,next:NextFunction)=>{
    const result = await getRepository(Item).findOne(req.params.id);
    return res.json(result);
}

export const deleteData = async (request:Request, response:Response,next:NextFunction)=>{
    // const dataToRemove = await getRepository(Item).findOne(request.params.id);
    const result = await getRepository(Item).delete(request.params.id);
    return response.json(result);
}

export const createData = async (request:Request, response:Response, next:NextFunction)=>{
    const data = getRepository(Item).create(request.body);
    const  result = await getRepository(Item).save(data);
    return response.json(result);
}

export const updateData = async (request:Request, response:Response, next:NextFunction)=>{
    const data = await getRepository(Item).findOne(request.params.id);
    if(data){
        getRepository(Item).merge(data, request.body);
        const result = getRepository(Item).save(data);
        return response.json(result);
    }
    return response.json({msg:"Data Not Found"})
} 

// export const getAll = async (
//     req: Request,
//     res: Response
//   ): Promise<Response> => {
//     const data = await getRepository(Item).find();
//     return res.json(data);
//   };