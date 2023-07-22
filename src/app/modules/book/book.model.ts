import { Model, Schema, model } from "mongoose";
import { IBook } from "./book.interface";
const IReviewerSchema = new Schema({
    reviewer: { type: String, required: true },
    comments: { type: String, required: true },
    readerEmail: { type: String, required: true }
  });
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    genre: {
        type: String,
        required: false,
        default: "Unknown"
    },
    publishDate: {
        type: String,
        required: false
    },
    publisher: {
        type: String,
        required: true
    },
    reader: [{ type: String }], 
    reviews : {
        type : [IReviewerSchema]
    }
});


export const Book : Model<IBook> = model<IBook>('Book', bookSchema);