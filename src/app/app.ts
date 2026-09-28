import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './core/services/cart.service';
import { SeoService } from './core/services/seo.service';

@Component({ selector: 'app-root', imports: [RouterOutlet, RouterLink, RouterLinkActive], templateUrl: './app.html', styleUrl: './app.scss' })
export class App {
  readonly cart = inject(CartService);
  private readonly seo = inject(SeoService);
  readonly menuOpen = signal(false);
  closeMenu() { this.menuOpen.set(false); }
}
