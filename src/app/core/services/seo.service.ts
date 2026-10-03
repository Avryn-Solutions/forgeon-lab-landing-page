import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CatalogService } from './catalog.service';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly catalog = inject(CatalogService);

  constructor() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.update());
  }

  private update(): void {
    const path = this.router.url.split('?')[0];
    const pages: Record<string, [string, string]> = {
      '/': ['ForgeonLab | Ideias ganham forma', 'Produtos personalizados, presentes e criações com identidade própria. Envie sua ideia à ForgeonLab e peça pelo WhatsApp.'],
      '/loja': ['Loja | ForgeonLab', 'Explore pets personalizados, chaveiros, miniaturas, decoração e presentes criativos da ForgeonLab.'],
      '/carrinho': ['Carrinho | ForgeonLab', 'Confira as peças escolhidas e finalize seu pedido pelo WhatsApp da ForgeonLab.'],
      '/orcamento': ['Pedir orçamento | ForgeonLab', 'Envie sua ideia, foto ou arquivo e converse com a ForgeonLab sobre um produto personalizado.'],
      '/portfolio': ['Portfólio | ForgeonLab', 'Conheça as possibilidades criativas da ForgeonLab e acompanhe a evolução do nosso portfólio.'],
      '/sobre': ['Sobre a ForgeonLab | ForgeonLab', 'Conheça a ForgeonLab, um laboratório criativo onde ideias, personagens e lembranças ganham forma.'],
    };
    const product = path.startsWith('/produto/') ? this.catalog.getProductBySlug(path.slice(9)) : undefined;
    const [title, description] = product
      ? [`${product.name} | ForgeonLab`, product.shortDescription]
      : (pages[path] ?? pages['/']);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
