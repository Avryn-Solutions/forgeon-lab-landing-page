import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly directions = [
    { number: '01', title: 'Pets e memórias', text: 'Miniaturas que começam em uma foto e carregam os detalhes de quem você ama.', image: '/products/pet.webp', alt: 'Visual conceitual de miniatura de pet' },
    { number: '02', title: 'Pequenos presentes', text: 'Chaveiros, lembranças e objetos personalizados para marcar uma ocasião.', image: '/products/chaveiros.webp', alt: 'Visual conceitual de chaveiros personalizados' },
    { number: '03', title: 'Objetos com identidade', text: 'Peças decorativas, troféus e projetos especiais criados a partir de uma ideia.', image: '/products/decor.webp', alt: 'Visual conceitual de objeto decorativo' },
  ];
}
