"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wishlist_route_1 = require("../app/modules/wishlist/wishlist.route");
const book_route_1 = require("../app/modules/book/book.route");
const user_route_1 = require("../app/modules/user/user.route");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: user_route_1.userRoutes
    },
    {
        path: '/books',
        route: book_route_1.bookRoutes
    },
    {
        path: '/wishlist',
        route: wishlist_route_1.wishRoutes
    }
];
moduleRoutes.forEach(route => routers.use(route.path, route.route));
exports.default = routers;
