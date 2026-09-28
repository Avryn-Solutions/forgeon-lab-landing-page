import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CatalogService } from '../../core/services/catalog.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { Product as ProductModel } from '../../core/models/product';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogService);
  private readonly cart = inject(CartService);
  private readonly whatsApp = inject(WhatsAppService);
  readonly product = this.catalog.getProductBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
  readonly imageIndex = signal(0);
  readonly quantity = signal(1);
  readonly selectedOptions = signal<Record<string, string>>({});
  readonly notes = signal('');
  readonly added = signal(false);
  readonly attempted = signal(false);
  readonly categories = this.catalog.getCategories();
  categoryName(slug: string): string { return this.categories.find(category => category.slug === slug)?.name ?? slug; }

  selectOption(name: string, value: string): void {
    this.selectedOptions.update(current => ({ ...current, [name]: value }));
    this.added.set(false);
  }

  requiredMissing(product: ProductModel): boolean {
    return product.options.some(option => option.required && !this.selectedOptions()[option.name]);
  }

  add(product: ProductModel): void {
    this.attempted.set(true);
    if (this.requiredMissing(product)) return;
    this.cart.add(product, this.quantity(), this.selectedOptions(), this.notes());
    this.added.set(true);
  }

  directOrder(event: MouseEvent, product: ProductModel): void {
    this.attempted.set(true);
    if (this.requiredMissing(product)) event.preventDefault();
  }

  buyUrl(product: ProductModel): string {
    return this.whatsApp.cartUrl([{ id: product.id, product, quantity: this.quantity(), selectedOptions: this.selectedOptions(), notes: this.notes() }]);
  }
}
