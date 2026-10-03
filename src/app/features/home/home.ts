import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaCarousel } from '../../shared/media-carousel/media-carousel';
import { CatalogService } from '../../core/services/catalog.service';

@Component({ selector: 'app-home', imports: [RouterLink, CurrencyPipe, MediaCarousel], templateUrl: './home.html', styleUrls: ['./home.scss', './home-hero.scss'] })
export class Home {
  private readonly catalog = inject(CatalogService);
  readonly featured = this.catalog.getFeaturedProducts();
  readonly pet = this.catalog.getProductBySlug('pet-personalizado');

  replay(element: HTMLElement): void {
    element.getAnimations({ subtree: true }).forEach(animation => {
      animation.cancel();
      animation.play();
    });
  }
}
