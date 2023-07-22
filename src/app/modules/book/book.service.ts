import { IBook, IUpdateEmail, IUpdateReviewerParams, IUpdatedBookParams } from "./book.interface";
import { Book } from "./book.model";

const bookCreate = async(book : IBook) : Promise<IBook | null> => {
    const createBook = await Book.create(book);
    if(!createBook){
        return null;
    }else{
        return createBook;
    }
};


const getAllBooks = async() : Promise<IBook[] | null> => {
    const books = Book.find({});
    if(!books){
        throw new Error("No Users Found");
        return null
    }else{
        return books
    }
};

const singleBook = async(id: string) : Promise<IBook | null> => {
    const book = Book.findById({_id: id});
    if(!book){
        throw new Error("No Users Found");
        return null
    }else{
        return book
    }
};

const updateBook = async({id, updatedData} : IUpdatedBookParams) : Promise<IBook | null> => {
    const book = Book.findByIdAndUpdate(id, updatedData, {new : true});
    if(!book){
        throw new Error("No Users Found");
        return null
    }else{
        return book
    }
};

const updateReader = async({id, email} : IUpdateEmail) : Promise<IBook | null> => {
    const book = await Book.findByIdAndUpdate({_id: id}, {
        $push: {
            reader: email
        }
    });
    if(!book){
        throw new Error("No Users Found");
        return null
    }else{
        return book
    }
};

const updateReviewer = async({id, data} : IUpdateReviewerParams) : Promise<IBook |null> => {
    const book = await Book.findByIdAndUpdate({_id: id}, {
        $push: {
            reviews: data
        }
    });
    if(!book){
        throw new Error("No Users Found");
        return null
    }else{
        return book
    }
};


const deleteBook = async(id : string) : Promise<IBook[] | null> => {
    const deletedBook = await Book.findByIdAndDelete(id);
    const remainingBooks =await Book.find({});
    if(!deleteBook){
        throw new Error("Book Deleted Failed");
        return null
    }else{
        return remainingBooks;
    }
}

export default {
    bookCreate,
    getAllBooks,
    singleBook,
    updateBook,
    updateReader,
    updateReviewer,
    deleteBook
}