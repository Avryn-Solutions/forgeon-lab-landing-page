import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart';
import { QuoteRequest } from '../models/quote';

const PHONE = '5511994476058';
const money = (amount: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
const url = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  cartUrl(items: CartItem[]): string {
    const lines = ['Olá! 👋', 'Separei algumas peças e gostaria de conversar sobre meu pedido na ForgeonLab:'];
    for (const item of items) {
      lines.push('', `${item.product.name} × ${item.quantity}`);
      for (const [option, value] of Object.entries(item.selectedOptions)) {
        if (value) lines.push(`${option}: ${value}`);
      }
      if (item.notes) lines.push(`Observações: ${item.notes}`);
      if (item.product.priceType === 'QUOTE' || item.product.price === null) {
        lines.push('Valor: sob orçamento');
      } else {
        const prefix = item.product.priceType === 'STARTING_AT' ? 'A partir de ' : '';
        lines.push(`Valor estimado: ${prefix}${money(item.product.price * item.quantity)}`);
      }
    }
    const subtotal = items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0);
    const estimated = items.some((item) => item.product.priceType !== 'FIXED');
    lines.push('', `${estimated ? 'Total estimado' : 'Total'}: ${money(subtotal)}`);
    if (items.some((item) => item.product.priceType === 'QUOTE')) {
      lines.push('Itens sob orçamento não estão incluídos no total estimado.');
    }
    return url(lines.join('\n'));
  }

  quoteUrl(form: QuoteRequest): string {
    const lines = [
      'Olá! 👋',
      'Tenho uma ideia e gostaria de conversar com a ForgeonLab sobre um orçamento.',
      '',
      `Nome: ${form.name}`,
      `Tipo: ${form.projectType}`,
      `Descrição: ${form.description}`,
      `Quantidade: ${form.quantity} unidade(s)`,
    ];
    if (form.dimensions) lines.push(`Dimensões: ${form.dimensions}`);
    if (form.color) lines.push(`Cor: ${form.color}`);
    if (form.deadline) lines.push(`Prazo desejado: ${form.deadline}`);
    if (form.hasFile) {
      lines.push(`📎 Tenho um arquivo${form.fileType ? ` ${form.fileType}` : ''} para enviar.`);
      lines.push('Vou anexar o arquivo nesta conversa.');
    }
    return url(lines.join('\n'));
  }
}
