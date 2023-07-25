"use strict";
// import IBook from "./book.interface";
// import { Book } from "./book.model";
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
exports.getUser = exports.createUserToDB = void 0;
const user_moel_1 = require("./user.moel");
const createUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_moel_1.User(payload);
    yield user.save();
    return user;
});
exports.createUserToDB = createUserToDB;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_moel_1.User.findById(id);
    return user;
});
exports.getUser = getUser;
