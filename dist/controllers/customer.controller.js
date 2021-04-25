"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDue = exports.searchCustomer = exports.deleteData = exports.updateData = exports.createData = exports.getData = exports.getAll = void 0;
var typeorm_1 = require("typeorm");
var Customer_1 = require("../entity/Customer");
exports.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).find({
                    order: {
                        name: "ASC",
                        address: "ASC",
                        phone: "ASC"
                    }
                })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, res.json(data)];
        }
    });
}); };
exports.getData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).findOne(req.params.id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).create(req.body)];
            case 1:
                newUser = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).save(newUser)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.updateData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).findOne(req.params.id)];
            case 1:
                data = _a.sent();
                if (!data) return [3 /*break*/, 3];
                typeorm_1.getRepository(Customer_1.Customer).merge(data, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).save(data)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 3: return [2 /*return*/, res.json({ msg: 'Data not found' })];
        }
    });
}); };
exports.deleteData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).delete(req.params.id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.searchCustomer = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var query, x, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = request.params.que;
                if (query == null) {
                    query = '';
                }
                x = "%" + query + "%";
                console.log("Searched for : " + x);
                return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).find({
                        where: [
                            { name: typeorm_1.Like(x) },
                            { address: typeorm_1.Like(x) },
                            { phone: typeorm_1.Like(x) }
                        ],
                        order: {
                            name: "ASC",
                            address: "ASC",
                            phone: "ASC"
                        }
                    })];
            case 1:
                results = _a.sent();
                return [2 /*return*/, response.json(results)];
        }
    });
}); };
exports.getDue = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var query, results, x;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = request.params.que;
                if (query == null) {
                    query = '';
                }
                console.log("Searched for : " + query);
                return [4 /*yield*/, typeorm_1.getRepository(Customer_1.Customer).find({
                        where: [
                            { id: query }
                        ],
                        order: {
                            name: "ASC",
                            address: "ASC",
                            phone: "ASC"
                        }
                    })];
            case 1:
                results = _a.sent();
                x = results.length;
                console.log('Data Count : ' + x);
                return [2 /*return*/, response.json(results)];
        }
    });
}); };
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
