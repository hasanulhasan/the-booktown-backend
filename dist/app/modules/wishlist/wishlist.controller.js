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
exports.updateWishListBook = exports.deleteSingleWishedBook = exports.getAllWishedBooks = exports.createWishList = void 0;
const wishlist_service_1 = require("./wishlist.service");
const createWishList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const book = yield (0, wishlist_service_1.createWishedBookDB)(data);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('wishlist book added successful');
});
exports.createWishList = createWishList;
const getAllWishedBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, wishlist_service_1.getWishedBooks)();
    res.status(200).json({
        status: 'success',
        data: books
    });
    console.log(`${books.length} Wishedbooks found`);
});
exports.getAllWishedBooks = getAllWishedBooks;
const deleteSingleWishedBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const book = yield (0, wishlist_service_1.deleteWishedBook)(id);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('Book deleted from wish list');
});
exports.deleteSingleWishedBook = deleteSingleWishedBook;
const updateWishListBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const book = yield (0, wishlist_service_1.updateWishedBook)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: book
    });
    console.log('Wish Book updated');
});
exports.updateWishListBook = updateWishListBook;
