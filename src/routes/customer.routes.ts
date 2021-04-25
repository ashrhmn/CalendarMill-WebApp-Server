import { Router } from "express";
const router = Router();

import {
  getAll,
  getData,
  createData,
  updateData,
  deleteData,
  searchCustomer,
  getDue
} from "../controllers/customer.controller";

router.get("/api/customers", getAll);
router.get("/api/customers/:id", getData);
router.post("/api/customers", createData);
router.put("/api/customers/:id", updateData);
router.delete("/api/customers/:id", deleteData);
router.get("/api/customers/search/:que", searchCustomer);
router.get("/api/customers/due/:que", getDue);
// router.get("/customers/search/", searchCustomer);

export default router;
