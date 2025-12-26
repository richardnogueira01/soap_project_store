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
  variants?: {
    id: string;
    name: string;
  }[];
}

export const products: Product[] = [
  {
    id: "sabonete-massageador-mel",
    name: "Sabonete Massageador Mel",
    price: 13.50,
    description: "Sabonete massageador com mel puro para hidratação e relaxamento",
    fullDescription: "Nosso sabonete massageador com mel oferece uma experiência completa de autocuidado. O mel puro atua como umectante natural, retendo a hidratação na pele, enquanto a textura do sabonete permite uma massagem suave e revitalizante. Perfeito para relaxar após um dia longo.",
    ingredients: ["Azeite de Oliva", "Manteiga de Karité", "Mel Silvestre", "Óleo de Amêndoas Doces", "Vitamina E"],
    image: "/images/sabonetemel.jfif",
    category: "Sabonetes",
    benefits: ["Hidratação profunda", "Calmante natural", "Massagem relaxante", "Aroma reconfortante"]
  },
  {
    id: "sabonete-massageador-acafrao",
    name: "Sabonete Massageador Açafrão",
    price: 13.50,
    description: "Sabonete massageador com açafrão para revitalização e energia",
    fullDescription: "Especialmente formulado com açafrão, este sabonete massageador oferece uma experiência energizante e revigorante. O açafrão é conhecido por suas propriedades anti-inflamatórias e antioxidantes. A textura permite uma massagem suave que estimula a circulação e deixa a pele revitalizada.",
    ingredients: ["Azeite de Oliva", "Manteiga de Cacau", "Açafrão em Pó", "Óleo Essencial de Gengibre", "Vitamina E"],
    image: "/images/saboneteacafrao.jpg",
    category: "Sabonetes",
    benefits: ["Propriedades anti-inflamatórias", "Estimula circulação", "Revigorante", "Aroma exótico"]
  },
  {
    id: "kit-sabonete-massageador-trio",
    name: "Kit 2 Sabonetes Massageador",
    price: 25.00,
    description: "Kit com 2 sabonetes massageador - Açafrão e Mel",
    fullDescription: "Aproveite o melhor dos dois mundos! Este kit inclui um Sabonete Massageador de Mel e um de Açafrão, perfeitos para uma experiência completa de cuidado. Ideal como presente ou para ter sempre à mão os dois aromas relaxantes e revigorantes.",
    ingredients: ["Azeite de Oliva", "Manteiga de Karité", "Manteiga de Cacau", "Mel Silvestre", "Açafrão em Pó", "Óleo de Amêndoas Doces", "Vitamina E"],
    image: "/images/acafraoemel.jfif",
    category: "Sabonetes",
    benefits: ["Combo econômico", "Dois aromas diferentes", "Hidratação e energia", "Ótimo presenteado"]
  },
  {
    id: "sabonete-80g",
    name: "Sabonete 80g Frutas Tropicais",
    price: 10.50,
    description: "Sabonete natural com frutas tropicais - Maracujá, Morango e Limão",
    fullDescription: "Uma explosão de sabores tropicais em forma de sabonete! Combinando os aromas revigorantes de maracujá, morango e limão, este sabonete oferece uma experiência sensorial única. Feito com óleos essenciais naturais, deixa a pele macia, perfumada e revigorada.",
    ingredients: ["Óleo de Coco", "Óleo de Palma Sustentável", "Óleo Essencial de Maracujá", "Óleo Essencial de Morango", "Óleo Essencial de Limão", "Manteiga de Karité"],
    image: "/images/triosabonete.jfif",
    category: "Sabonetes",
    benefits: ["Aroma tropical", "Limpeza suave", "Revitalizante", "Tamanho prático"],
    variants: [
      { id: "sabonete-80g-morango", name: "Morango" },
      { id: "sabonete-80g-maracuja", name: "Maracujá" },
      { id: "sabonete-80g-limao", name: "Limão" }
    ]
  },
  {
    id: "perfume-capilar-unitario",
    name: "Perfume Capilar Unitário",
    price: 29.99,
    description: "Perfume capilar natural com essências importadas",
    fullDescription: "Nosso perfume capilar unitário é uma solução sofisticada para dar aroma e brilho aos seus cabelos. Feito com essências importadas de qualidade premium, oferece um aroma duradouro sem resíduos. Ideal para finalizar o penteado ou revigorar os cabelos durante o dia.",
    ingredients: ["Álcool de Cereais", "Essências Importadas", "Óleo de Argan", "Vitamina E", "Extrato de Camomila"],
    image: "/images/capilar.jfif",
    category: "Perfumes Capilares",
    benefits: ["Aroma duradouro", "Sem resíduos", "Brilho natural", "Essências importadas"]
  }
];
