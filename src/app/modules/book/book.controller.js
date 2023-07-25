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
exports.updateSingleBook = exports.deleteSingleBook = exports.getSingleBook = exports.getAllBooks = exports.createBook = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const book = yield (0, book_service_1.createBookToDB)(data);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('book added successful');
});
exports.createBook = createBook;
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, book_service_1.getBooks)();
    res.status(200).json({
        status: 'success',
        data: books
    });
    console.log(`${books.length} books fetched`);
});
exports.getAllBooks = getAllBooks;
const getSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const book = yield (0, book_service_1.getBook)(id);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('Single book fetched');
});
exports.getSingleBook = getSingleBook;
const deleteSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const book = yield (0, book_service_1.deleteBook)(id);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('Book deleted');
});
exports.deleteSingleBook = deleteSingleBook;
const updateSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const book = yield (0, book_service_1.updateBook)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('Book updated');
});
exports.updateSingleBook = updateSingleBook;
