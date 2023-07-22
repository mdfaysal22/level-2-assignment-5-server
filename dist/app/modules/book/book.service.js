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
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = require("./book.model");
const bookCreate = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const createBook = yield book_model_1.Book.create(book);
    if (!createBook) {
        return null;
    }
    else {
        return createBook;
    }
});
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = book_model_1.Book.find({});
    if (!books) {
        throw new Error("No Users Found");
        return null;
    }
    else {
        return books;
    }
});
const singleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = book_model_1.Book.findById({ _id: id });
    if (!book) {
        throw new Error("No Users Found");
        return null;
    }
    else {
        return book;
    }
});
const updateBook = ({ id, updatedData }) => __awaiter(void 0, void 0, void 0, function* () {
    const book = book_model_1.Book.findByIdAndUpdate(id, updatedData, { new: true });
    if (!book) {
        throw new Error("No Users Found");
        return null;
    }
    else {
        return book;
    }
});
const updateReader = ({ id, email }) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, {
        $push: {
            reader: email
        }
    });
    if (!book) {
        throw new Error("No Users Found");
        return null;
    }
    else {
        return book;
    }
});
const updateReviewer = ({ id, data }) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, {
        $push: {
            reviews: data
        }
    });
    if (!book) {
        throw new Error("No Users Found");
        return null;
    }
    else {
        return book;
    }
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBook = yield book_model_1.Book.findByIdAndDelete(id);
    const remainingBooks = yield book_model_1.Book.find({});
    if (!deleteBook) {
        throw new Error("Book Deleted Failed");
        return null;
    }
    else {
        return remainingBooks;
    }
});
exports.default = {
    bookCreate,
    getAllBooks,
    singleBook,
    updateBook,
    updateReader,
    updateReviewer,
    deleteBook
};
