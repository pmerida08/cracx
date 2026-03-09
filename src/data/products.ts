export interface Product {
  id: string;
  slug: string;
  name: string;
  flavor: string;
  price: number;
  description: string;
  benefits: string[];
  image: string;
  bgColor: string;
  textColor: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "menta",
    name: "CRACX",
    flavor: "Menta",
    price: 9.99,
    description: "Caramelos de xilitol puro con sabor a menta fresca. Perfectos para después de las comidas.",
    benefits: [
      "100% Xilitol",
      "Previene la caries",
      "Refresca el aliento",
      "Apto para diabéticos"
    ],
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-900"
  },
  {
    id: "2",
    slug: "fresa",
    name: "CRACX",
    flavor: "Fresa",
    price: 9.99,
    description: "Caramelos de xilitol puro con un delicioso sabor a fresa natural.",
    benefits: [
      "100% Xilitol",
      "Previene la caries",
      "Sabor natural a fresa",
      "Apto para diabéticos"
    ],
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-rose-100",
    textColor: "text-rose-900"
  },
  {
    id: "3",
    slug: "limon",
    name: "CRACX",
    flavor: "Limón",
    price: 9.99,
    description: "Caramelos de xilitol puro con un toque cítrico y refrescante de limón.",
    benefits: [
      "100% Xilitol",
      "Previene la caries",
      "Sabor natural a limón",
      "Apto para diabéticos"
    ],
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-900"
  }
];
