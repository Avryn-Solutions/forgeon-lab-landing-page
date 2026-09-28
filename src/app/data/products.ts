import { Product } from '../core/models/product';

// Catálogo demonstrativo. Nomes, preços e imagens devem ser confirmados antes da publicação comercial.
export const products: Product[] = [
  {
    id: 'pet-personalizado', name: 'Pet em miniatura', slug: 'pet-personalizado',
    shortDescription: 'Seu companheiro em uma peça feita só para ele.',
    description: 'Transformamos fotos e referências do seu pet em uma miniatura com personalidade. Envie as imagens e conte os detalhes que tornam esse amigo único.',
    price: 90, priceType: 'STARTING_AT', category: 'pets', images: ['/products/pet.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['10 cm', '15 cm', '20 cm'], required: true }, { name: 'Base', values: ['Sem base', 'Preta', 'Colorida'] }],
  },
  {
    id: 'chaveiro-personalizado', name: 'Chaveiro com a sua ideia', slug: 'chaveiro-personalizado',
    shortDescription: 'Uma lembrança para acompanhar você por aí.',
    description: 'Uma palavra, símbolo ou desenho pode virar um chaveiro exclusivo. Ideal para presentes, eventos e pequenas séries.',
    price: 5, priceType: 'FIXED', category: 'chaveiros', images: ['/products/chaveiros.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Cor', values: ['Roxo', 'Preto', 'Branco', 'Outra cor'] }, { name: 'Acabamento', values: ['Fosco', 'Brilhante'] }],
  },
  {
    id: 'objeto-decorativo', name: 'Objeto de mesa autoral', slug: 'objeto-de-mesa',
    shortDescription: 'Um toque de personalidade para seu espaço.',
    description: 'Peça decorativa de formas contemporâneas, criada para compor mesas, estantes e cantinhos especiais.',
    price: null, priceType: 'QUOTE', category: 'decoracao', images: ['/products/decor.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['Pequeno', 'Médio', 'Grande'] }, { name: 'Cor', values: ['Roxo', 'Neutro', 'Outra cor'] }],
  },
  {
    id: 'miniatura-personagem', name: 'Miniatura de personagem', slug: 'miniatura-de-personagem',
    shortDescription: 'Seu personagem favorito fora da tela e no mundo real.',
    description: 'Miniatura sob medida a partir de um desenho ou conceito original enviado por você. Avaliamos complexidade, escala e acabamento antes do orçamento.',
    price: null, priceType: 'QUOTE', category: 'miniaturas', images: ['/products/pet.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['10 cm', '15 cm', '20 cm', 'Outro'] }],
  },
  {
    id: 'presente-personalizado', name: 'Presente com história', slug: 'presente-personalizado',
    shortDescription: 'Uma memória especial transformada em objeto.',
    description: 'Conte para nós a história por trás do presente. Criamos uma proposta que tenha significado para quem vai receber.',
    price: null, priceType: 'QUOTE', category: 'presentes', images: ['/products/decor.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [],
  },
  {
    id: 'brinde-corporativo', name: 'Brindes para marcas', slug: 'brindes-para-marcas',
    shortDescription: 'Sua identidade em peças feitas para circular.',
    description: 'Chaveiros, miniaturas e objetos personalizados para eventos, equipes e ações de marca. O orçamento considera modelo e quantidade.',
    price: null, priceType: 'QUOTE', category: 'projetos-especiais', images: ['/products/chaveiros.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Quantidade', values: ['Até 10', '11 a 50', 'Mais de 50'] }],
  },
];
