export interface Product {
  id: string;
  slug: string;
  name: string;
  flavor: string;
  price: number;
  description: string;
  benefits: string[];
  image: string;
  imageOpen: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "menta",
    name: "CRACX",
    flavor: "Menta",
    price: 9.99,
    description:
      "Caramelos de xilitol puro con sabor a menta fresca. Sin azúcares, sin lactosa, sin gluten. Perfectos para después de las comidas.",
    benefits: [
      "100% Xilitol puro",
      "Previene la caries",
      "Refresca el aliento",
      "Sin azúcares añadidos",
      "Apto para diabéticos",
      "El xilitol ayuda a mineralizar",
    ],
    image: "/img/31.webp",
    imageOpen: "/img/32.webp",
    bgColor: "bg-cyan-50",
    accentColor: "#00BCD4",
    textColor: "text-cyan-700",
  },
  {
    id: "2",
    slug: "cereza",
    name: "CRACX",
    flavor: "Cereza",
    price: 9.99,
    description:
      "Caramelos de xilitol puro con un intenso sabor a cereza. Sin azúcares, sin lactosa, sin gluten. Un placer saludable para tu sonrisa.",
    benefits: [
      "100% Xilitol puro",
      "Previene la caries",
      "Sabor natural a cereza",
      "Sin azúcares añadidos",
      "Apto para diabéticos",
      "El xilitol ayuda a mineralizar",
    ],
    image: "/img/11.webp",
    imageOpen: "/img/12.webp",
    bgColor: "bg-red-50",
    accentColor: "#E53935",
    textColor: "text-red-700",
  },
  {
    id: "3",
    slug: "sandia",
    name: "CRACX",
    flavor: "Sandía",
    price: 9.99,
    description:
      "Caramelos de xilitol puro con el delicioso sabor de la sandía. Sin azúcares, sin lactosa, sin gluten. Refrescante y saludable.",
    benefits: [
      "100% Xilitol puro",
      "Previene la caries",
      "Sabor natural a sandía",
      "Sin azúcares añadidos",
      "Apto para diabéticos",
      "El xilitol ayuda a mineralizar",
    ],
    image: "/img/41.webp",
    imageOpen: "/img/42.webp",
    bgColor: "bg-pink-50",
    accentColor: "#E91E8C",
    textColor: "text-pink-700",
  },
  {
    id: "4",
    slug: "limon",
    name: "CRACX",
    flavor: "Limón",
    price: 9.99,
    description:
      "Caramelos de xilitol puro con un toque cítrico y refrescante de limón. Sin azúcares, sin lactosa, sin gluten. Energizante y saludable.",
    benefits: [
      "100% Xilitol puro",
      "Previene la caries",
      "Sabor natural a limón",
      "Sin azúcares añadidos",
      "Apto para diabéticos",
      "El xilitol ayuda a mineralizar",
    ],
    image: "/img/21.webp",
    imageOpen: "/img/22.webp",
    bgColor: "bg-yellow-50",
    accentColor: "#F9C825",
    textColor: "text-yellow-700",
  },
];
