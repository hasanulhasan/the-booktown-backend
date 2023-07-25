import express from 'express'
import { wishRoutes } from '../app/modules/wishlist/wishlist.route';
import { bookRoutes } from '../app/modules/book/book.route';
import { userRoutes } from '../app/modules/user/user.route';

const routers = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes
  },
  {
    path: '/books',
    route: bookRoutes
  },
  {
    path: '/wishlist',
    route: wishRoutes
  }
]

moduleRoutes.forEach(route=> routers.use(route.path, route.route))


export default routers