import { Schema, model } from "mongoose";
import IUser from "./user.interface";


export const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  role: {type: String, required: true,},
});

export const User = model<IUser>('User', userSchema);