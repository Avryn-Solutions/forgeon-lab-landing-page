export type PriceType = 'FIXED' | 'STARTING_AT' | 'QUOTE';

export interface ProductOption {
  name: string;
  values: string[];
  required?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number | null;
  priceType: PriceType;
  category: string;
  images: string[];
  imageType?: 'photo' | 'concept';
  imageDescriptions?: string[];
  video?: { src: string; poster: string; description: string };
  featured: boolean;
  customizable: boolean;
  active: boolean;
  options: ProductOption[];
  leadTime?: string;
  badge?: string;
}
