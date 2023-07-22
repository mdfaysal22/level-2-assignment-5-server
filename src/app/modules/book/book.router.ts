import express from 'express';
import { controller } from './book.controller';

export const bookRouter = express.Router();

bookRouter.post("/createBook", controller.createBookController);
bookRouter.get("/books", controller.getAllBooksController);
bookRouter.get("/book/:id", controller.singleBookController);
bookRouter.put("/updated-book/:id", controller.updatedBookController);
bookRouter.put("/updatedEmail/:id", controller.updatedEmailController);
bookRouter.put("/updateReviewer/:id", controller.updateReviewerController);
bookRouter.delete("/book/:id", controller.deletedBookController);