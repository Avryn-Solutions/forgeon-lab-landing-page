import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuoteRequest } from '../../core/models/quote';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-quote',
  imports: [FormsModule, RouterLink],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Quote {
  private readonly whatsApp = inject(WhatsAppService);
  readonly projectTypes = ['Impressão de arquivo pronto', 'Produto personalizado', 'Pet personalizado', 'Miniatura', 'Brinde', 'Projeto para empresa', 'Outro'];
  readonly fileTypes = ['STL', '3MF', 'OBJ', 'STEP', 'ZIP', 'PNG', 'JPG', 'PDF', 'Outro'];
  request: QuoteRequest = { name: '', projectType: '', description: '', quantity: 1, dimensions: '', color: '', deadline: '', hasFile: false, fileType: '' };

  submit(form: NgForm): void {
    if (form.invalid) { form.control.markAllAsTouched(); return; }
    window.open(this.whatsApp.quoteUrl(this.request), '_blank', 'noopener,noreferrer');
  }
}
