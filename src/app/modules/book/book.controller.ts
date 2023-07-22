import { Request, Response } from "express";
import bookService from "./book.service";
import { IBook, IReviewer, IUpdateEmail } from "./book.interface";


const createBookController = async(req : Request, res: Response) => {
    const book = req.body;
    const result = await bookService.bookCreate(book);
    if(result){
        return res.status(200).json({
            message: 'Book created successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error creating Book',
            status: false,
            code: 501
        })
    }
};


const getAllBooksController = async(req : Request, res : Response) => {
    const result = await bookService.getAllBooks();
    if(result){
        return res.status(200).json({
            message: 'Books get successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error getting Books',
            status: false,
            code: 501
        })
    }
};

const singleBookController = async(req: Request, res: Response) => {
    const id : string = req.params.id;
    const result = await bookService.singleBook(id);
    if(result){
        return res.status(200).json({
            message: 'get book successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error get book',
            status: false,
            code: 501
        })
    }
};

const updatedBookController = async(req:Request, res: Response) => {
    const id = req.params.id;
    const updatedData : IBook = req.body;
    const result = await bookService.updateBook({id, updatedData });
    if(result){
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error updating',
            status: false,
            code: 501
        })
    }
};

const updatedEmailController = async(req: Request, res:Response) => {
    const id = req.params.id;
    const {email} = req.body;
    const result = await bookService.updateReader({id, email});
    if(result){
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error updating',
            status: false,
            code: 501
        })
    }
};

const updateReviewerController = async(req:Request, res: Response) => {
    const id = req.params.id;
    const data : IReviewer = req.body;
    const result = await bookService.updateReviewer({id, data});
    if(result){
        return res.status(200).json({
            message: 'Updated Docs successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error updating',
            status: false,
            code: 501
        })
    }

}

const deletedBookController = async(req: Request, res: Response) => {
    const id = req.params.id;
    const result = await bookService.deleteBook(id);
    if(result){
        return res.status(200).json({
            message: 'Deleted successfully',
            status: true,
            data: result
        })
    }else{
        return res.status(501).json({
            error:'Error Delete',
            status: false,
            code: 501
        })
    }
}
export const controller = {
    createBookController,
    getAllBooksController,
    singleBookController,
    updatedBookController,
    updatedEmailController,
    updateReviewerController,
    deletedBookController
}