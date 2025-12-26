export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  ingredients: string[];
  image: string;
  category: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "sabonete-morango-chia",
    name: "Morango & Chia",
    price: 10.90,
    description: "Relaxe corpo e mente com o poder da fragrancia de morango com champanhe",
    fullDescription: "Nosso sabonete de Morango & Chia é uma verdadeira terapia para o banho. Feito com óleo essencial de Morango e Chia, ele ajuda a reduzir o estresse e a ansiedade após um dia longo. Sua base rica em manteiga de Karité garante uma hidratação profunda, enquanto os ingredientes naturais proporcionam uma esfoliação suave e natural.",
    ingredients: ["Lauril", "Óleo de Coco", "Manteiga de Karité", "Óleo Essencial de Morango", "Chia"],
    image: "/images/hero-soap.png",
    category: "Sabonetes",
    benefits: ["Calmante natural", "Hidratação profunda", "Esfoliação suave", "Aroma terapêutico"]
  },
  {
    id: "argila-verde-detox",
    name: "Argila Verde Detox",
    price: 32.50,
    description: "Purificação profunda para peles oleosas e mistas.",
    fullDescription: "O sabonete de Argila Verde é formulado especificamente para controlar a oleosidade e desintoxicar a pele. A argila verde atua como um ímã para impurezas e toxinas, enquanto o óleo essencial de Tea Tree (Melaleuca) oferece propriedades antissépticas e cicatrizantes. Ideal para uso facial e corporal.",
    ingredients: ["Azeite de Oliva", "Óleo de Palma Sustentável", "Argila Verde", "Óleo Essencial de Tea Tree", "Extrato de Alecrim"],
    image: "/images/collection-display.png",
    category: "Esfoliantes de Pele",
    benefits: ["Controle de oleosidade", "Ação antisséptica", "Limpeza profunda", "Secativo natural"]
  },
  {
    id: "aveia-mel-suave",
    name: "Aveia & Mel",
    price: 26.00,
    description: "Cuidado extra suave para peles sensíveis e delicadas.",
    fullDescription: "Um clássico da saboaria artesanal, nossa versão de Aveia & Mel é um abraço para peles sensíveis. O mel puro atua como umectante natural, retendo a hidratação na pele, enquanto a aveia coloidal acalma irritações e coceiras. Sem óleos essenciais fortes, possui apenas o aroma doce e reconfortante dos próprios ingredientes.",
    ingredients: ["Azeite de Oliva", "Manteiga de Cacau", "Mel Silvestre", "Aveia em Flocos", "Óleo de Amêndoas Doces"],
    image: "/images/ingredient-olive.png",
    category: "Perfumes para Cabelos",
    benefits: ["Hipoalergênico", "Calmante para irritações", "Nutrição intensa", "Seguro para crianças"]
  },
  {
    id: "carvao-ativado",
    name: "Carvão Ativado & Menta",
    price: 30.00,
    description: "Frescor intenso e renovação celular.",
    fullDescription: "Para quem busca uma sensação de limpeza revigorante. O carvão ativado remove poluentes e células mortas, promovendo uma renovação da pele. O toque de menta pimenta traz um frescor gelado que energiza e desperta, perfeito para banhos matinais ou pós-treino.",
    ingredients: ["Óleo de Coco", "Óleo de Rícino", "Carvão Ativado em Pó", "Óleo Essencial de Menta Piperita", "Vitamina E"],
    image: "/images/about-craft.png",
    category: "Energizante",
    benefits: ["Limpeza profunda", "Sensação refrescante", "Renovação celular", "Combate odores"]
  }
];
