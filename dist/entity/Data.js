"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var typeorm_1 = require("typeorm");
var Data = /** @class */ (function () {
    function Data() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Data.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Data.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Data.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Data.prototype, "itemId", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 65, scale: 3 }),
        __metadata("design:type", Number)
    ], Data.prototype, "rate", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 65, scale: 3 }),
        __metadata("design:type", Number)
    ], Data.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Data.prototype, "type", void 0);
    Data = __decorate([
        typeorm_1.Entity()
    ], Data);
    return Data;
}());
exports.Data = Data;
