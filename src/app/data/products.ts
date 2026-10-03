import { Product } from '../core/models/product';

// Catálogo demonstrativo. Nomes, preços e imagens devem ser confirmados antes da publicação comercial.
export const products: Product[] = [
  {
    id: 'pet-personalizado', name: 'Pet em miniatura', slug: 'pet-personalizado',
    shortDescription: 'Uma lembrança do seu pet para ter sempre por perto.',
    description: 'Envie fotos do seu pet e conte como ele é. Conversamos sobre pose, tamanho e detalhes para criar uma miniatura que lembre o seu companheiro.',
    price: 90, priceType: 'STARTING_AT', category: 'pets', images: ['/products/pet.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['10 cm', '15 cm', '20 cm'], required: true }, { name: 'Base', values: ['Sem base', 'Preta', 'Colorida'] }],
  },
  {
    id: 'chaveiro-personalizado', name: 'Chaveiro com a sua ideia', slug: 'chaveiro-personalizado',
    shortDescription: 'Uma pequena lembrança para levar com você.',
    description: 'Um nome, um desenho ou um símbolo pode virar chaveiro. Conte para quem é a peça; podemos pensar em um presente ou em uma pequena série.',
    price: 5, priceType: 'FIXED', category: 'chaveiros', images: ['/products/chaveiros.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Cor', values: ['Roxo', 'Preto', 'Branco', 'Outra cor'] }, { name: 'Acabamento', values: ['Fosco', 'Brilhante'] }],
  },
  {
    id: 'objeto-decorativo', name: 'Objeto de mesa autoral', slug: 'objeto-de-mesa',
    shortDescription: 'Um detalhe feito para o seu cantinho.',
    description: 'Uma peça para mesa ou estante, pensada com você. Conversamos sobre tamanho, cor e acabamento para que ela combine com o lugar onde vai ficar.',
    price: null, priceType: 'QUOTE', category: 'decoracao', images: ['/products/decor.webp'],
    featured: true, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['Pequeno', 'Médio', 'Grande'] }, { name: 'Cor', values: ['Roxo', 'Neutro', 'Outra cor'] }],
  },
  {
    id: 'miniatura-personagem', name: 'Miniatura de personagem', slug: 'miniatura-de-personagem',
    shortDescription: 'Seu personagem original em uma miniatura.',
    description: 'Envie o desenho ou a descrição do seu personagem original. Avaliamos tamanho, detalhes e acabamento antes de preparar o orçamento.',
    price: null, priceType: 'QUOTE', category: 'miniaturas', images: ['/products/pet.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Tamanho', values: ['10 cm', '15 cm', '20 cm', 'Outro'] }],
  },
  {
    id: 'presente-personalizado', name: 'Presente com história', slug: 'presente-personalizado',
    shortDescription: 'Um presente que nasce de uma lembrança.',
    description: 'Conte para quem é o presente e o que você gostaria de lembrar ou celebrar. A partir dessa conversa, pensamos em uma peça especial.',
    price: null, priceType: 'QUOTE', category: 'presentes', images: ['/products/decor.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [],
  },
  {
    id: 'brinde-corporativo', name: 'Brindes para marcas', slug: 'brindes-para-marcas',
    shortDescription: 'Peças para compartilhar a identidade da sua marca.',
    description: 'Podemos criar chaveiros, miniaturas e pequenos objetos para eventos, equipes e marcas. Conversamos sobre o modelo e a quantidade antes do orçamento.',
    price: null, priceType: 'QUOTE', category: 'projetos-especiais', images: ['/products/chaveiros.webp'],
    featured: false, customizable: true, active: true, badge: 'Conceito', leadTime: 'Prazo definido após avaliação',
    options: [{ name: 'Quantidade', values: ['Até 10', '11 a 50', 'Mais de 50'] }],
  },
];
