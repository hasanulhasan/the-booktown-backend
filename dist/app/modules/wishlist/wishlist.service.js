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
exports.updateWishedBook = exports.deleteWishedBook = exports.getWishedBooks = exports.createWishedBookDB = void 0;
const wishlist_model_1 = require("./wishlist.model");
const createWishedBookDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlist = new wishlist_model_1.Wishlist(payload);
    yield wishlist.save();
    return wishlist;
});
exports.createWishedBookDB = createWishedBookDB;
const getWishedBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield wishlist_model_1.Wishlist.find({});
    return books;
});
exports.getWishedBooks = getWishedBooks;
const deleteWishedBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield wishlist_model_1.Wishlist.findByIdAndDelete(id);
    return book;
});
exports.deleteWishedBook = deleteWishedBook;
const updateWishedBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield wishlist_model_1.Wishlist.findOneAndUpdate({ _id: id }, payload, { new: true });
    return book;
});
exports.updateWishedBook = updateWishedBook;
