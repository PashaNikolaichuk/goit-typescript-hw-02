export interface Images {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  likes: number;
  created_at: string;
}
