import { NextFunction, Request, Response } from "express";
import { createBookToDB, deleteBook, getBook, getBooks, updateBook } from "./book.service";

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

export const deleteSingleBook = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const book = await deleteBook(id);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('Book deleted')
}

export const updateSingleBook = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const book = await updateBook(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('Book updated')
}