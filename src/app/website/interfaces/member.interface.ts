export interface Member {
  id:     number;
  slug:   string;
  name:   string;
  charge: string;
  photo:  Photo;
}

export interface Photo {
  url: string;
  alt: string;
}
