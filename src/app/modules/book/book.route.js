"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get('/:id', book_controller_1.getSingleBook);
router.patch('/:id', book_controller_1.updateSingleBook);
router.delete('/:id', book_controller_1.deleteSingleBook);
router.get('/', book_controller_1.getAllBooks);
router.post('/create-book', book_controller_1.createBook);
exports.bookRoutes = router;
