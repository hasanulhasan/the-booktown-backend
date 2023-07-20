import express from 'express'
import { createBook, getAllBooks, getSingleBook } from './book.controller';

const router = express.Router();

router.get('/books/:id', getSingleBook)
router.get('/books', getAllBooks)
router.post('/create-book', createBook)

export default router;