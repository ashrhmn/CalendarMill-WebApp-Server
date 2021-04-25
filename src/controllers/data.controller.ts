import { Request, Response, NextFunction } from "express"
import { Brackets, createQueryBuilder, getManager, getRepository } from "typeorm"
import { Customer } from "../entity/Customer";
import { Data } from "../entity/Data";
import { Item } from "../entity/Item";


export const getAll = async (request: Request, response: Response, nexr: NextFunction) => {
    const result = await getRepository(Data).find();
    return response.json(result);
}

export const getAllJoined = async (request: Request, response: Response, nexr: NextFunction) => {
    const data = await getRepository(Data).createQueryBuilder('d')
        .addSelect('c.name', 'c_name')
        .addSelect('case when i.name IS NULL THEN(case when d.type=1 then "Discount" WHEN d.type=2 then "Payment" end) else i.name end', 'i_name')
        .leftJoin(Customer, 'c', 'd.customerId=c.id')
        .leftJoin(Item, 'i', 'd.itemId=i.id')
        .addOrderBy('d_date', 'ASC')
        .addOrderBy('c_name', 'ASC')
        .addOrderBy('d_type', 'ASC')
        .addOrderBy('i_name', 'ASC')
        .getRawMany();
    return response.json(data);
}

export const getData = async (req: Request, res: Response, next: NextFunction) => {
    const result = await getRepository(Data).findOne(req.params.id);
    return res.json(result);
}

export const getDataJoined = async (req: Request, res: Response, next: NextFunction) => {
    const result = await getRepository(Data).findOne(req.params.id);
    const data = await getRepository(Data).createQueryBuilder('d')
        .addSelect('c.name', 'c_name')
        .addSelect('case when i.name IS NULL THEN(case when d.type=1 then "Discount" WHEN d.type=2 then "Payment" end) else i.name end', 'i_name')
        .leftJoin(Customer, 'c', 'd.customerId=c.id')
        .leftJoin(Item, 'i', 'd.itemId=i.id')
        .addOrderBy('d_date', 'ASC')
        .addOrderBy('c_name', 'ASC')
        .addOrderBy('d_type', 'ASC')
        .addOrderBy('i_name', 'ASC')
        .where(`d.id=${req.params.id}`)
        .getRawMany();
    return res.json(data);
}

export const getByCusId = async (req: Request, res: Response, next: NextFunction) => {
    // const result = await getRepository(Data).findOne(req.params.id);
    let customerId= req.params.id;
    if(customerId==null){customerId='0'}
    const data = await getRepository(Data).createQueryBuilder('d')
        .addSelect('c.name', 'c_name')
        .addSelect('case when i.name IS NULL THEN(case when d.type=1 then "Discount" WHEN d.type=2 then "Payment" end) else i.name end', 'i_name')
        .leftJoin(Customer, 'c', 'd.customerId=c.id')
        .leftJoin(Item, 'i', 'd.itemId=i.id')
        .addOrderBy('d_date', 'ASC')
        .addOrderBy('c_name', 'ASC')
        .addOrderBy('d_type', 'ASC')
        .addOrderBy('i_name', 'ASC')
        .where(`d.customerId=${customerId}`)
        .getRawMany();
    return res.json(data);
}

export const getByCustomerDate = async (req: Request, res: Response, next: NextFunction) => {
    let customerId = req.params.customerId;
    if (customerId != '0') {
        const data = await getRepository(Data).createQueryBuilder('d')
            .addSelect('c.name', 'c_name')
            .addSelect('case when i.name IS NULL THEN(case when d.type=1 then "Discount" WHEN d.type=2 then "Payment" end) else i.name end', 'i_name')
            .leftJoin(Customer, 'c', 'd.customerId=c.id')
            .leftJoin(Item, 'i', 'd.itemId=i.id')
            .addOrderBy('d_date', 'ASC')
            .addOrderBy('c_name', 'ASC')
            .addOrderBy('d_type', 'ASC')
            .addOrderBy('i_name', 'ASC')
            .where(`d.customerId=${req.params.customerId}`)
            .andWhere(`d.date>=${req.params.fromDate}`)
            .andWhere(`d.date<=${req.params.toDate}`)
            .getRawMany();
        return res.json(data);
    }
    else {
        const data = await getRepository(Data).createQueryBuilder('d')
            .addSelect('c.name', 'c_name')
            .addSelect('case when i.name IS NULL THEN(case when d.type=1 then "Discount" WHEN d.type=2 then "Payment" end) else i.name end', 'i_name')
            .leftJoin(Customer, 'c', 'd.customerId=c.id')
            .leftJoin(Item, 'i', 'd.itemId=i.id')
            .addOrderBy('d_date', 'ASC')
            .addOrderBy('c_name', 'ASC')
            .addOrderBy('d_type', 'ASC')
            .addOrderBy('i_name', 'ASC')
            .where(`d.date>=${req.params.fromDate}`)
            .andWhere(`d.date<=${req.params.toDate}`)
            .getRawMany();
        return res.json(data);
    }


}

export const deleteData = async (request: Request, response: Response, next: NextFunction) => {
    // const dataToRemove = await getRepository(Item).findOne(request.params.id);
    const result = await getRepository(Data).delete(request.params.id);
    return response.json(result);
}

export const createData = async (request: Request, response: Response, next: NextFunction) => {
    const data = getRepository(Data).create(request.body);
    const result = await getRepository(Data).save(data);
    return response.json(result);
}

export const updateData = async (request: Request, response: Response, next: NextFunction) => {
    const data = await getRepository(Data).findOne(request.params.id);
    if (data) {
        getRepository(Data).merge(data, request.body);
        const result = getRepository(Data).save(data);
        return response.json(result);
    }
    return response.json({ msg: "Data Not Found" })
}
