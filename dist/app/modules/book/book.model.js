"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const IReviewerSchema = new mongoose_1.Schema({
    reviewer: { type: String, required: true },
    comments: { type: String, required: true },
    readerEmail: { type: String, required: true }
});
const bookSchema = new mongoose_1.Schema({
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
    reviews: {
        type: [IReviewerSchema]
    }
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
