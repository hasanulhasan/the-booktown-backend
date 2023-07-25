import express from 'express'
import { createBook, deleteSingleBook, getAllBooks, getSingleBook, updateSingleBook } from './book.controller';

const router = express.Router();

router.get('/:id', getSingleBook)
router.patch('/:id', updateSingleBook)
router.delete('/:id', deleteSingleBook)
router.get('/', getAllBooks)
router.post('/create-book', createBook)

export const bookRoutes = router;