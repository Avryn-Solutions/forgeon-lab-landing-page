import { Injectable } from '@angular/core';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { Category, Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  getProducts(): Product[] {
    return products.filter((product) => product.active);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.getProducts().find((product) => product.slug === slug);
  }

  getCategories(): Category[] {
    return categories;
  }

  getFeaturedProducts(): Product[] {
    return this.getProducts().filter((product) => product.featured);
  }
}
