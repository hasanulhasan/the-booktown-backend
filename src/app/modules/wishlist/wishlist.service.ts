import IWishlist from "./wishlist.interface";
import { Wishlist } from "./wishlist.model";

export const createWishedBookDB = async (payload: IWishlist): Promise<IWishlist>=> {
  const wishlist = new Wishlist(payload)
  await wishlist.save();
  return wishlist
}

export const getWishedBooks = async ()=> {
  const books = await Wishlist.find({});
  return books;
}


export const deleteWishedBook = async (id: string)=> {
  const book = await Wishlist.findByIdAndDelete(id);
  return book;
}

export const updateWishedBook = async (id: string, payload:Partial<IWishlist>)=> {
  const book = await Wishlist.findOneAndUpdate({_id: id}, payload, {new:true});
  return book;
}