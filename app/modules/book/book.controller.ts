import { NextFunction, Request, Response } from "express";
import { createBookToDB, getBook, getBooks } from "./book.service";

export const createBook = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const book =await createBookToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('book added successful')
}

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  const books = await getBooks();
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log('All book fetched')
}

export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const book = await getBook(id);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('Single book fetched')
}