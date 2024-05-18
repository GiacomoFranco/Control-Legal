import { Image } from './image.interface';

export interface Member {
  id: number;
  slug: string;
  name: string;
  charge: string;
  summary?: string;
  content?: string;
  photo: Image;
}
