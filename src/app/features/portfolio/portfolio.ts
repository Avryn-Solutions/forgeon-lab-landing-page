import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../core/services/catalog.service';
import { MediaCarousel } from '../../shared/media-carousel/media-carousel';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, MediaCarousel],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly pet = inject(CatalogService).getProductBySlug('pet-personalizado');
}
