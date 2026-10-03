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
  readonly projects = [
    {
      number: '01', title: 'Vida Loka',
      text: 'Colete azul, gravata vermelha e uma base com o nome. Uma miniatura cheia de detalhes para guardar por perto.',
      image: '/products/pets/vida-loka.webp',
      alt: 'Miniatura Vida Loka: cachorro branco com colete azul, gravata vermelha e base preta personalizada.',
    },
    {
      number: '02', title: 'Boomer',
      text: 'A expressão, a textura do pelo e o nome na base fazem parte desta peça. Um exemplo real de pet em miniatura da ForgeonLab.',
      image: '/products/pets/boomer.webp',
      alt: 'Miniatura Boomer em base preta personalizada, fotografada com a identificação ForgeonLab.',
    },
  ];
}
