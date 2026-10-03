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
    { name: 'Guaru', role: 'A imaginação', image: '/characters/guaru.webp', alt: 'Guaru, sapo verde com cartola roxa e varinha', description: 'Curioso e cheio de ideias. Guaru lembra que vale a pena perguntar: e se a gente tentasse?' },
    { name: 'Pingy', role: 'A conexão', image: '/characters/pingy.webp', alt: 'Pingy, pequeno pinguim simpático', description: 'Pingy gosta de ouvir. Ele lembra que os pequenos detalhes também contam uma história.' },
    { name: 'Disquete', role: 'A invenção', image: '/characters/disquete.webp', alt: 'Disquete, pequeno robô do universo ForgeonLab', description: 'Disquete gosta de testar caminhos e descobrir como fazer uma ideia ganhar forma.' },
  ];
}
