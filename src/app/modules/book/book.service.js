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
exports.updateBook = exports.deleteBook = exports.getBook = exports.getBooks = exports.createBookToDB = void 0;
const book_model_1 = require("./book.model");
const createBookToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.create(payload);
    return book;
});
exports.createBookToDB = createBookToDB;
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_model_1.Book.find({});
    return books;
});
exports.getBooks = getBooks;
const getBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    return book;
});
exports.getBook = getBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findByIdAndDelete(id);
    return book;
});
exports.deleteBook = deleteBook;
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findOneAndUpdate({ _id: id }, payload, { new: true });
    return book;
});
exports.updateBook = updateBook;
