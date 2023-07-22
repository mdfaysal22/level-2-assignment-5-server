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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const user_service_1 = __importDefault(require("./user.service"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield user_service_1.default.createUser(user);
    if (result) {
        return res.status(200).json({
            message: 'User created successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error creating User',
            status: false,
            code: 501
        });
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.default.getUsers();
    if (result) {
        return res.status(200).json({
            message: 'User created successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error creating User',
            status: false,
            code: 501
        });
    }
});
exports.controller = {
    createUserController,
    getAllUser
};
