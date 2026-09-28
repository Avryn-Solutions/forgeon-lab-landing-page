import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../core/services/catalog.service';

@Component({
  selector: 'app-shop',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shop {
  private readonly catalog = inject(CatalogService);
  readonly products = this.catalog.getProducts().filter(product => product.active);
  readonly categories = this.catalog.getCategories();
  readonly search = signal('');
  readonly category = signal('all');
  readonly sort = signal('featured');
  categoryName(slug: string): string { return this.categories.find(category => category.slug === slug)?.name ?? slug; }
  readonly filtered = computed(() => {
    const query = this.search().trim().toLocaleLowerCase('pt-BR');
    const matches = this.products.filter(product =>
      (this.category() === 'all' || product.category === this.category()) &&
      (!query || `${product.name} ${product.shortDescription} ${product.category}`.toLocaleLowerCase('pt-BR').includes(query))
    );
    if (this.sort() === 'name') return matches.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (this.sort() === 'price') return matches.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    return matches.sort((a, b) => Number(b.featured) - Number(a.featured));
  });
}
