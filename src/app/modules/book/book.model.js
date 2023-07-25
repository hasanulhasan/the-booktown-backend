"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    genre: { type: String, required: true },
    dateOfPublication: { type: String, required: true },
    status: { type: Boolean, required: true },
    reviews: [String],
});
exports.Book = (0, mongoose_1.model)('Book', exports.bookSchema);
