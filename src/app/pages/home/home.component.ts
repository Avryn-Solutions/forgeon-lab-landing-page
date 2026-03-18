import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type NavItem = { label: string; target: string };
type InfoCard = { title: string; description: string; icon: string };
type GalleryItem = { title: string; category: string; image: string };
type StepItem = { title: string; description: string };
type Testimonial = { quote: string; name: string; role: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  readonly navItems: NavItem[] = [
    { label: 'Sobre', target: 'sobre' },
    { label: 'Beneficios', target: 'beneficios' },
    { label: 'Servicos', target: 'servicos' },
    { label: 'Projetos', target: 'projetos' },
    { label: 'Contato', target: 'contato' },
  ];

  readonly benefits: InfoCard[] = [
    {
      title: 'Alta precisao',
      description: 'Camadas finas e controle tecnico para entregar pecas fiaveis.',
      icon: 'assets/icons/pecas-tecnicas.svg',
    },
    {
      title: 'Producao sob demanda',
      description: 'Fabricacao flexivel para lotes pequenos ou projetos unicos.',
      icon: 'assets/icons/impressao-3d.svg',
    },
    {
      title: 'Acabamento premium',
      description: 'Pecas com acabamento limpo e profissional prontas para uso.',
      icon: 'assets/icons/cube2.svg',
    },
    {
      title: 'Atendimento consultivo',
      description: 'Suporte proativo do briefing a entrega final do projeto.',
      icon: 'assets/icons/mail.svg',
    },
    {
      title: 'Entrega agil',
      description: 'Fluxo otimizado para reduzir lead time sem abrir mao da qualidade.',
      icon: 'assets/icons/download.svg',
    },
    {
      title: 'Solucoes criativas',
      description: 'Modelagem e ajustes para transformar ideias em produtos reais.',
      icon: 'assets/icons/prototipos.svg',
    },
  ];

  readonly services: InfoCard[] = [
    {
      title: 'Impressao 3D personalizada',
      description: 'Pecas exclusivas para projetos tecnicos, criativos ou comerciais.',
      icon: 'assets/icons/impressao-3d.svg',
    },
    {
      title: 'Prototipagem funcional',
      description: 'Validacao rapida de conceito, encaixe e ergonomia.',
      icon: 'assets/icons/prototipos.svg',
    },
    {
      title: 'Pecas decorativas',
      description: 'Elementos visuais de alta qualidade para ambientes e eventos.',
      icon: 'assets/icons/cube2.svg',
    },
    {
      title: 'Brindes personalizados',
      description: 'Kits e itens customizados para acao promocional e branding.',
      icon: 'assets/icons/brindes.svg',
    },
    {
      title: 'Pequenas tiragens',
      description: 'Producao enxuta para teste de mercado ou vendas especiais.',
      icon: 'assets/icons/download.svg',
    },
    {
      title: 'Desenvolvimento sob encomenda',
      description: 'Ajuste de design e orientacao tecnica para cada necessidade.',
      icon: 'assets/icons/pecas-tecnicas.svg',
    },
  ];

  readonly gallery: GalleryItem[] = [
    {
      title: 'Linha corporativa',
      category: 'Brindes',
      image: 'assets/images/portfolio-1.png',
    },
    {
      title: 'Kit decor premium',
      category: 'Decoracao',
      image: 'assets/images/portfolio-2.png',
    },
    {
      title: 'Prototipo mecanico',
      category: 'Prototipagem',
      image: 'assets/images/portfolio-3.png',
    },
    {
      title: 'Miniaturas custom',
      category: 'Personalizados',
      image: 'assets/images/portfolio-4.png',
    },
    {
      title: 'Peca tecnica de reposicao',
      category: 'Industrial',
      image: 'assets/images/portfolio-2.png',
    },
    {
      title: 'Colecionavel sob demanda',
      category: 'Criativo',
      image: 'assets/images/portfolio-1.png',
    },
  ];

  readonly steps: StepItem[] = [
    {
      title: 'Voce envia a ideia ou arquivo',
      description: 'Recebemos seu briefing, referencia ou modelo 3D inicial.',
    },
    {
      title: 'Analise tecnica do projeto',
      description: 'Avaliamos material, acabamento, prazo e custo ideal.',
    },
    {
      title: 'Producao com controle de qualidade',
      description: 'Impressao, pos-processo e verificacao final da peca.',
    },
    {
      title: 'Entrega pronta para uso',
      description: 'Envio seguro com orientacoes para melhor aproveitamento.',
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote:
        'A Forgeon acelerou nosso desenvolvimento em duas semanas com prototipos precisos e suporte excelente.',
      name: 'Carolina M.',
      role: 'Product Designer - Startup de hardware',
    },
    {
      quote:
        'Precisavamos de brindes tecnicos para um evento e recebemos tudo no prazo, com acabamento impecavel.',
      name: 'Rafael T.',
      role: 'Coordenador de Marketing - Industria',
    },
    {
      quote:
        'Atendimento humano, orientacao clara e resultado acima da expectativa para nossas pecas personalizadas.',
      name: 'Fernanda L.',
      role: 'Arquiteta e cliente recorrente',
    },
  ];

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  openWhatsApp(): void {
    window.open(
      'https://wa.me/5511959062010?text=Ola%2C%20quero%20solicitar%20um%20orcamento%20de%20impressao%203D.',
      '_blank',
      'noopener,noreferrer'
    );
  }
}
