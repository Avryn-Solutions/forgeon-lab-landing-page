import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../core/services/catalog.service';

@Component({ selector: 'app-home', imports: [RouterLink, CurrencyPipe], templateUrl: './home.html', styleUrl: './home.scss' })
export class Home {
  readonly featured = inject(CatalogService).getFeaturedProducts();
}
