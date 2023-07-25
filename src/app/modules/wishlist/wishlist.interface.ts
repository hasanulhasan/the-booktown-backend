export default interface IWishlist {
  title: string;
  author: string;
  img: string;
  price: string;
  rating: string;
  genre: string;
  dateOfPublication: string;
  status: boolean;
  reviews?: string[];
  isRead: boolean;
  userEmail: string
}

