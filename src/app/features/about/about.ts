import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly characters = [
    { name: 'Guaru', role: 'A imaginação', image: '/characters/guaru.webp', alt: 'Guaru, sapo verde com cartola roxa e varinha', description: 'Curioso e um pouco caótico. Lembra que toda criação começa quando alguém pergunta: e se?' },
    { name: 'Pingy', role: 'A conexão', image: '/characters/pingy.webp', alt: 'Pingy, pequeno pinguim simpático', description: 'Acolhedor e atento aos detalhes. Está perto de cada ideia que chega ao Lab.' },
    { name: 'Disquete', role: 'A invenção', image: '/characters/disquete.webp', alt: 'Disquete, pequeno robô do universo ForgeonLab', description: 'Gosta dos bastidores, dos testes e da tecnologia que faz as ideias tomarem forma.' },
  ];
}
