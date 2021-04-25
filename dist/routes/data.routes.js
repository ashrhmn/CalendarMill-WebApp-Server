"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var data_controller_1 = require("../controllers/data.controller");
router.get("/api/data", data_controller_1.getAllJoined);
router.get("/api/data/dev", data_controller_1.getAll);
router.get("/api/data/:id", data_controller_1.getDataJoined);
router.get("/api/dataByCus/:id", data_controller_1.getByCusId);
router.get("/api/dataByCus/", data_controller_1.getByCusId);
router.get("/api/data/:customerId/:fromDate/:toDate", data_controller_1.getByCustomerDate);
router.get("/api/data/dev/:id", data_controller_1.getData);
router.put("/api/data/:id", data_controller_1.updateData);
router.delete("/api/data/:id", data_controller_1.deleteData);
router.post("/api/data", data_controller_1.createData);
exports.default = router;
