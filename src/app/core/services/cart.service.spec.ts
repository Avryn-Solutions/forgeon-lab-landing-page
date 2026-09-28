import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { products } from '../../data/products';
import { CartService } from './cart.service';
import { WhatsAppService } from './whatsapp.service';

describe('Cart and WhatsApp order', () => {
  it('keeps quote items out of the estimated amount and includes options in the message', () => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    const cart = TestBed.inject(CartService);
    const whatsapp = TestBed.inject(WhatsAppService);
    cart.add(products[0], 2, { Tamanho: '15 cm' }, 'Nome Toti');
    cart.add(products[2]);

    expect(cart.count()).toBe(3);
    expect(cart.subtotal()).toBe(180);
    expect(cart.estimated()).toBe(true);
    const message = decodeURIComponent(whatsapp.cartUrl(cart.items()).split('text=')[1]);
    expect(message).toContain('Tamanho: 15 cm');
    expect(message).toContain('Total estimado: R$ 180,00');
    expect(message).toContain('Itens sob orçamento não estão incluídos');
  });
});
