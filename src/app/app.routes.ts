import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { CatalogService } from './core/services/catalog.service';

export const routes: Routes = [
  { path: '', title: 'ForgeonLab | Ideias ganham forma', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  { path: 'loja', title: 'Loja | ForgeonLab', loadComponent: () => import('./features/shop/shop').then(m => m.Shop) },
  { path: 'produto/:slug', title: route => `${inject(CatalogService).getProductBySlug(route.paramMap.get('slug') ?? '')?.name ?? 'Produto'} | ForgeonLab`, loadComponent: () => import('./features/product/product').then(m => m.Product) },
  { path: 'carrinho', title: 'Carrinho | ForgeonLab', loadComponent: () => import('./features/cart/cart').then(m => m.Cart) },
  { path: 'orcamento', title: 'Pedir orçamento | ForgeonLab', loadComponent: () => import('./features/quote/quote').then(m => m.Quote) },
  { path: 'portfolio', title: 'Portfólio | ForgeonLab', loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio) },
  { path: 'sobre', title: 'Sobre o Lab | ForgeonLab', loadComponent: () => import('./features/about/about').then(m => m.About) },
  { path: '**', redirectTo: '' },
];
