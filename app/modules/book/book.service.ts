import IBook from "./book.interface";
import { Book } from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook>=> {
  const book = await Book.create(payload)
  return book
}

export const getBooks = async ()=> {
  const books = await Book.find({});
  return books;
}

export const getBook = async (id: string)=> {
  const book = await Book.findById(id);
  return book;
}

export const deleteBook = async (id: string)=> {
  const book = await Book.findByIdAndDelete(id);
  return book;
}

export const updateBook = async (id: string, payload:Partial<IBook>)=> {
  const book = await Book.findOneAndUpdate({_id: id}, payload, {new:true});
  return book;
}