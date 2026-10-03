import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { products } from '../../data/products';
import { MediaCarousel } from './media-carousel';

describe('Pet media carousel', () => {
  it('opens on the video, replaces it with photos and loops in both directions', async () => {
    await TestBed.configureTestingModule({ imports: [MediaCarousel] }).compileComponents();
    const fixture = TestBed.createComponent(MediaCarousel);
    fixture.componentRef.setInput('product', products[0]);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('video source')?.getAttribute('src')).toBe(products[0].video?.src);
    (element.querySelector('[aria-label="Próxima mídia"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('video')).toBeNull();
    expect(element.querySelector('.media-stage img')?.getAttribute('src')).toBe(products[0].images[0]);
    fixture.componentInstance.move(1);
    fixture.detectChanges();
    expect(element.querySelector('.media-stage img')?.getAttribute('src')).toBe(products[0].images[1]);
    fixture.componentInstance.move(1);
    fixture.detectChanges();
    expect(element.querySelector('video')).not.toBeNull();
    (element.querySelector('[aria-label="Mídia anterior"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('.media-stage img')?.getAttribute('src')).toBe(products[0].images[1]);
  });
});
