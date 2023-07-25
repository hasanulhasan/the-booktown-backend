"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("./wishlist.controller");
const router = express_1.default.Router();
router.patch('/:id', wishlist_controller_1.updateWishListBook);
router.delete('/:id', wishlist_controller_1.deleteSingleWishedBook);
router.get('/', wishlist_controller_1.getAllWishedBooks);
router.post('/create-wishlist', wishlist_controller_1.createWishList);
exports.wishRoutes = router;
