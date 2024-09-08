import { Image } from './image.interface';

export interface Customer {
  id: number;
  name: string;
  photo: Image;
  slug: string;
}
