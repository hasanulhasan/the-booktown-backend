import { Schema, model } from "mongoose";
import IWishlist from "./wishlist.interface";


export const bookSchema = new Schema<IWishlist>({
  title: {type: String, required: true},
  author: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: String, required: true},
  rating: {type: String, required: true},
  genre: {type: String, required: true},
  dateOfPublication: {type: String, required: true},
  status: {type: Boolean, required: true},
  reviews: [String],
  isRead: {type: Boolean, required: true},
  userEmail: {type:String, required: true}
});

export const Wishlist = model<IWishlist>('Wishlist', bookSchema);