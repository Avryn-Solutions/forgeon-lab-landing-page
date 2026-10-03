import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-media-carousel',
  templateUrl: './media-carousel.html',
  styleUrl: './media-carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCarousel {
  readonly product = input.required<Product>();
  readonly selected = signal(0);
  readonly slides = computed(() => {
    const product = this.product();
    return [
      ...(product.video ? [{ type: 'video', src: product.video.src, thumbnail: product.video.poster, description: product.video.description }] : []),
      ...product.images.map((src, index) => ({
        type: 'image', src, thumbnail: src,
        description: product.imageDescriptions?.[index] || product.name + (product.imageType === 'photo' ? '' : ' — imagem conceitual'),
      })),
    ];
  });
  move(direction: number): void {
    this.selected.update(index => (index + direction + this.slides().length) % this.slides().length);
  }
}
