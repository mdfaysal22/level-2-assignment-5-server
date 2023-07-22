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
const book_service_1 = __importDefault(require("./book.service"));
const createBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const result = yield book_service_1.default.bookCreate(book);
    if (result) {
        return res.status(200).json({
            message: 'Book created successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error creating Book',
            status: false,
            code: 501
        });
    }
});
const getAllBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.default.getAllBooks();
    if (result) {
        return res.status(200).json({
            message: 'Books get successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error getting Books',
            status: false,
            code: 501
        });
    }
});
const singleBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.default.singleBook(id);
    if (result) {
        return res.status(200).json({
            message: 'get book successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error get book',
            status: false,
            code: 501
        });
    }
});
const updatedBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield book_service_1.default.updateBook({ id, updatedData });
    if (result) {
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error updating',
            status: false,
            code: 501
        });
    }
});
const updatedEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { email } = req.body;
    const result = yield book_service_1.default.updateReader({ id, email });
    if (result) {
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error updating',
            status: false,
            code: 501
        });
    }
});
const updateReviewerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield book_service_1.default.updateReviewer({ id, data });
    if (result) {
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error updating',
            status: false,
            code: 501
        });
    }
});
const deletedBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.default.deleteBook(id);
    if (result) {
        return res.status(200).json({
            message: 'Deleted successfully',
            status: true,
            data: result
        });
    }
    else {
        return res.status(501).json({
            error: 'Error Delete',
            status: false,
            code: 501
        });
    }
});
exports.controller = {
    createBookController,
    getAllBooksController,
    singleBookController,
    updatedBookController,
    updatedEmailController,
    updateReviewerController,
    deletedBookController
};
