"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.post("/createBook", book_controller_1.controller.createBookController);
exports.bookRouter.get("/books", book_controller_1.controller.getAllBooksController);
exports.bookRouter.get("/book/:id", book_controller_1.controller.singleBookController);
exports.bookRouter.put("/updated-book/:id", book_controller_1.controller.updatedBookController);
exports.bookRouter.put("/updatedEmail/:id", book_controller_1.controller.updatedEmailController);
exports.bookRouter.put("/updateReviewer/:id", book_controller_1.controller.updateReviewerController);
exports.bookRouter.delete("/book/:id", book_controller_1.controller.deletedBookController);
