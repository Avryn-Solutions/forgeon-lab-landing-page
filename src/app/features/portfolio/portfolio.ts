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
    { number: '01', title: 'Pets e memórias', text: 'Uma foto do seu pet pode inspirar uma miniatura para guardar por perto.', image: '/products/pet.webp', alt: 'Visual conceitual de miniatura de pet' },
    { number: '02', title: 'Pequenos presentes', text: 'Chaveiros e pequenas lembranças para agradecer, celebrar ou surpreender.', image: '/products/chaveiros.webp', alt: 'Visual conceitual de chaveiros personalizados' },
    { number: '03', title: 'Objetos com identidade', text: 'Peças para a casa, eventos ou marcas, pensadas a partir da sua ideia.', image: '/products/decor.webp', alt: 'Visual conceitual de objeto decorativo' },
  ];
}
