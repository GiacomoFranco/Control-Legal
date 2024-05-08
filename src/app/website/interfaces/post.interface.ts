import { Image } from './image.interface';

export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  thumbnail: Image;
}
