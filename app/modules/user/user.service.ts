// import IBook from "./book.interface";
// import { Book } from "./book.model";

import IUser from "./user.interface";
import { User } from "./user.moel";

export const createUserToDB = async (payload: IUser): Promise<IUser>=> {
  const user = new User(payload)
  await user.save();
  return user
}


export const getUser = async (id: string)=> {
  const user = await User.findById(id);
  return user;
}
