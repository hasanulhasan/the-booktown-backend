import IBook from "./book.interface";
import { Book } from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook>=> {
  const book = new Book(payload)
  await book.save();
  console.log('from service', book)
  return book
}

export const getBooks = async ()=> {
  const books = await Book.find({});
  console.log('from service', books)
  return books;
}

export const getBook = async (id: string)=> {
  const book = await Book.findById(id);
  console.log('from service for single book', book)
  return book;
}