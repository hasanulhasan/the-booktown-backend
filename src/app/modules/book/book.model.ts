import { Schema, model } from "mongoose";
import IBook from "./book.interface";

export const bookSchema = new Schema<IBook>({
  title: {type: String, required: true},
  author: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: String, required: true},
  rating: {type: String, required: true},
  genre: {type: String, required: true},
  dateOfPublication: {type: String, required: true},
  status: {type: Boolean, required: true},
  reviews: [String],
});

export const Book = model<IBook>('Book', bookSchema);