import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';
import { CatalogService } from './catalog.service';

const STORAGE_KEY = 'forgeonlab_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly catalog = inject(CatalogService);
  readonly items = signal<CartItem[]>(this.restore());
  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((total, item) =>
    total + (item.product.price ?? 0) * item.quantity, 0));
  readonly estimated = computed(() => this.items().some((item) => item.product.priceType !== 'FIXED'));

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items()));
      } catch {
        // Private mode or disabled storage should not block ordering.
      }
    });
  }

  add(product: Product, quantity = 1, selectedOptions: Record<string, string> = {}, notes = ''): void {
    if (quantity < 1 || !Number.isFinite(quantity)) return;
    const normalizedQuantity = Math.floor(quantity);
    const id = JSON.stringify([product.id, Object.entries(selectedOptions).sort(), notes.trim()]);
    this.items.update((items) => {
      const existing = items.find((item) => item.id === id);
      return existing
        ? items.map((item) => item.id === id ? { ...item, quantity: item.quantity + normalizedQuantity } : item)
        : [...items, { id, product, quantity: normalizedQuantity, selectedOptions: { ...selectedOptions }, notes: notes.trim() }];
    });
  }

  remove(id: string): void {
    this.items.update((items) => items.filter((item) => item.id !== id));
  }

  updateQuantity(id: string, quantity: number): void {
    if (!Number.isFinite(quantity)) return;
    if (quantity < 1) return this.remove(id);
    this.items.update((items) => items.map((item) =>
      item.id === id ? { ...item, quantity: Math.floor(quantity) } : item));
  }

  updateOptions(id: string, selectedOptions: Record<string, string>, notes = ''): void {
    this.items.update((items) => {
      const changed = items.find((item) => item.id === id);
      if (!changed) return items;
      const nextId = JSON.stringify([changed.product.id, Object.entries(selectedOptions).sort(), notes.trim()]);
      const match = items.find((item) => item.id === nextId && item.id !== id);
      if (match) return items.filter((item) => item.id !== id).map((item) =>
        item.id === nextId ? { ...item, quantity: item.quantity + changed.quantity } : item);
      return items.map((item) => item.id === id
        ? { ...item, id: nextId, selectedOptions: { ...selectedOptions }, notes: notes.trim() }
        : item);
    });
  }

  clear(): void {
    this.items.set([]);
  }

  private restore(): CartItem[] {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(saved)) return [];
      return saved.flatMap((item): CartItem[] => {
        const product = this.catalog.getProducts().find(candidate => candidate.id === item?.product?.id);
        if (!product || !Number.isInteger(item?.quantity) || item.quantity < 1 || item.quantity > 999) return [];
        const selectedOptions = Object.fromEntries(Object.entries(item.selectedOptions ?? {}).filter(
          ([name, value]) => typeof name === 'string' && typeof value === 'string')) as Record<string, string>;
        const notes = typeof item.notes === 'string' ? item.notes.slice(0, 2000) : '';
        const id = JSON.stringify([product.id, Object.entries(selectedOptions).sort(), notes.trim()]);
        return [{ id, product, quantity: item.quantity, selectedOptions, notes }];
      });
    } catch {
      return [];
    }
  }
}
