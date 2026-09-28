import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { CartItem } from '../../core/models/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  readonly cart = inject(CartService);
  private readonly whatsApp = inject(WhatsAppService);
  checkoutUrl(): string { return this.whatsApp.cartUrl(this.cart.items()); }
  optionChanged(item: CartItem, name: string, value: string): void {
    this.cart.updateOptions(item.id, { ...item.selectedOptions, [name]: value }, item.notes);
  }
  notesChanged(item: CartItem, notes: string): void {
    this.cart.updateOptions(item.id, item.selectedOptions, notes);
  }
}
