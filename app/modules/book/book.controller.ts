import { NextFunction, Request, Response } from "express";
import { createBookToDB, getBooks } from "./book.service";

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