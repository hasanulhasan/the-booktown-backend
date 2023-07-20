import express from 'express'
import { createBook, deleteSingleBook, getAllBooks, getSingleBook, updateSingleBook } from './book.controller';

const router = express.Router();

router.get('/books/:id', getSingleBook)
router.patch('/books/:id', updateSingleBook)
router.delete('/books/:id', deleteSingleBook)
router.get('/books', getAllBooks)
router.post('/create-book', createBook)

export default router;