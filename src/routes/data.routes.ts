import {Router} from 'express'
const router = Router();

import{
    getAll,
    getAllJoined,
    getData,
    getDataJoined,
    updateData,
    deleteData,
    createData,
    getByCustomerDate,
    getByCusId
} from '../controllers/data.controller'

router.get("/api/data", getAllJoined)
router.get("/api/data/dev", getAll)
router.get("/api/data/:id", getDataJoined)
router.get("/api/dataByCus/:id", getByCusId)
router.get("/api/dataByCus/", getByCusId)
router.get("/api/data/:customerId/:fromDate/:toDate", getByCustomerDate)
router.get("/api/data/dev/:id", getData)
router.put("/api/data/:id", updateData)
router.delete("/api/data/:id", deleteData)
router.post("/api/data", createData)

export default router;