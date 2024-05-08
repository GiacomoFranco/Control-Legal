import { Image } from './photo.interface';

export interface Member {
  id: number;
  slug: string;
  name: string;
  charge: string;
  photo: Image;
}
