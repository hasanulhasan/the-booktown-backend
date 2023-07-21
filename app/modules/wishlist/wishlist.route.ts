import express from 'express'
import { createWishList, deleteSingleWishedBook, getAllWishedBooks, updateWishListBook } from './wishlist.controller';

const router = express.Router();

router.patch('/:id', updateWishListBook)
router.delete('/:id', deleteSingleWishedBook)
router.get('/', getAllWishedBooks)
router.post('/create-wishlist', createWishList)

export const wishRoutes = router;