import { Schema, model } from "mongoose";
import IWishlist from "./wishlist.interface";


export const bookSchema = new Schema<IWishlist>({
  id: {type: Number, required: true, unique:true},
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: String, required: true},
  rating: {type: Number, required: true},
  genre: {type: String, required: true},
  dateOfPublication: {type: String, required: true},
  status: {type: Boolean, required: true},
  reviews: [String],
  isRead: {type: Boolean, required: true},
  userEmail: {type:String, required: true}

});

export const Wishlist = model<IWishlist>('Wishlist', bookSchema);