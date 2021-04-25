import {Router} from 'express'
const router = Router();

import{
    getAll,
    getData,
    updateData,
    deleteData,
    createData
} from '../controllers/item.controller'

router.get("/api/items", getAll)
router.get("/api/items/:id", getData)
router.put("/api/items/:id", updateData)
router.delete("/api/items/:id", deleteData)
router.post("/api/items", createData)

export default router;