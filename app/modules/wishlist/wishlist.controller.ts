import { NextFunction, Request, Response } from "express";
import { createWishedBookDB, deleteWishedBook, getWishedBooks, updateWishedBook } from "./wishlist.service";

export const createWishList = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const book =await createWishedBookDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('wishlist book added successful')
}

export const getAllWishedBooks = async (req: Request, res: Response, next: NextFunction) => {
  const books = await getWishedBooks();
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log(`${books.length} books found`)
}


export const deleteSingleWishedBook = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const book = await deleteWishedBook(id);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('Book deleted from wish list')
}

export const updateWishListBook = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const book = await updateWishedBook(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('Wish Book updated')
}