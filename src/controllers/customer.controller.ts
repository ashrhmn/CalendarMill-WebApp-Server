import { NextFunction, Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Customer } from "../entity/Customer";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getRepository(Customer).find({
    order: {
      name: "ASC",
      address: "ASC",
      phone: "ASC"
    }
});
  return res.json(data);
};

export const getData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Customer).findOne(req.params.id);
  return res.json(results);
};

export const createData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(Customer).create(req.body);
  const results = await getRepository(Customer).save(newUser);
  return res.json(results);
};

export const updateData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getRepository(Customer).findOne(req.params.id);
  if (data) {
    getRepository(Customer).merge(data, req.body);
    const results = await getRepository(Customer).save(data);
    return res.json(results);
  }

  return res.json({ msg: 'Data not found' });
};

export const deleteData = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Customer).delete(req.params.id);
  return res.json(results);
};

export const searchCustomer = async(request: Request, response: Response, next: NextFunction)=>{
  let query = request.params.que;
  if(query==null){query=''}
  let x = "%"+query+"%"
  console.log("Searched for : "+x)
  const results = await getRepository(Customer).find({
      where:[
          {name: Like(x)},
          {address: Like(x)},
          {phone: Like(x)}
      ],
      order: {
        name: "ASC",
        address: "ASC",
        phone: "ASC"
      }
  })
  return response.json(results);
}

export const getDue = async(request: Request, response: Response, next: NextFunction)=>{
  let query = request.params.que;
  if(query==null){query=''}
  console.log("Searched for : "+query)
  const results = await getRepository(Customer).find({
      where:[
          {id: query}
      ],
      order: {
        name: "ASC",
        address: "ASC",
        phone: "ASC"
      }
  })
  let x= results.length;
  console.log('Data Count : '+x)
  return response.json(results);
}

// export const searchCustomer = async(request: Request, response: Response, next: NextFunction)=>{
//   let query = request.query.q;
//   let x = "%"+query+"%"
//   console.log("Searched for : "+x)
//   const results = await getRepository(Customer).find({
//       where:[
//           {name: Like(x)},
//           {address: Like(x)},
//           {phone: Like(x)}
//       ]
//   })
//   return response.json(results);
// }