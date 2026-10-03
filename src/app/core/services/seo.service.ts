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
      '/': ['ForgeonLab | Peças feitas com cuidado', 'Miniaturas, presentes e peças personalizadas feitas com cuidado. Conte sua ideia à ForgeonLab. Enviamos para todo o Brasil.'],
      '/loja': ['Loja | ForgeonLab', 'Conheça miniaturas, chaveiros, presentes e peças personalizadas da ForgeonLab. Envio para todo o Brasil.'],
      '/carrinho': ['Carrinho | ForgeonLab', 'Revise suas peças e converse com a ForgeonLab pelo WhatsApp sobre personalização, frete e prazo.'],
      '/orcamento': ['Pedir orçamento | ForgeonLab', 'Envie uma foto, desenho ou arquivo e converse com a ForgeonLab sobre sua peça personalizada. Atendemos todo o Brasil.'],
      '/portfolio': ['Portfólio | ForgeonLab', 'Veja fotos reais das miniaturas Vida Loka e Boomer e um vídeo da peça Boomer. Pets personalizados com entrega para todo o Brasil.'],
      '/sobre': ['Sobre a ForgeonLab | ForgeonLab', 'Conheça a ForgeonLab e nosso jeito cuidadoso de criar peças personalizadas com design e impressão 3D.'],
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
