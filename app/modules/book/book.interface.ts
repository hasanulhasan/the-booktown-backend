export default interface IBook {
  id: number;
  title: string;
  author: string;
  img: string;
  price: string;
  rating: number;
  genre: string;
  dateOfPublication: string;
  status: boolean;
  reviews?: string[];
}