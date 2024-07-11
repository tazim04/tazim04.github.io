import apple from "./assets/apple.png";
import banana from "./assets/banana.png";
import orange from "./assets/orange.png";
import milk from "./assets/milk.png";
import yogurt from "./assets/yogurt.png";
import chicken from "./assets/chicken.jpeg";
import steak from "./assets/steak.png";
import salmon from "./assets/salmon.png";

const groceryItems = [
  {
    id: 1,
    name: "Pomme",
    image: apple,
    description: "Vendu à l'unité, poids moyen 170g",
    price: 2.99,
    unit: "u.",
    pricePerKg: 5.6,
    category: "Produits frais",
  },
  {
    id: 2,
    name: "Banane",
    image: banana,
    description: "Vendu par botte, environ 6 bananes",
    price: 3.49,
    unit: "botte",
    pricePerKg: 2.8,
    category: "Produce",
  },
  {
    id: 3,
    name: "Orange",
    image: orange,
    description: "Vendu à l'unité, poids moyen 200g",
    price: 1.99,
    unit: "u.",
    pricePerKg: 4.5,
    category: "Produce",
  },
  {
    id: 4,
    name: "Lait",
    image: milk,
    description: "1 litre, 2% de matière grasse",
    price: 1.79,
    unit: "L",
    pricePerLitre: 1.79,
    category: "Dairy",
  },
  {
    id: 5,
    name: "Yaourt",
    image: yogurt,
    description: "2% de matière grasse, pot de 750g",
    price: 2.99,
    unit: "750g",
    pricePerEgg: null,
    category: "Dairy",
  },
  {
    id: 6,
    name: "Blanc de poulet",
    image: chicken,
    description: "Sans os, sans peau, paquet de 1kg",
    price: 9.99,
    unit: "kg",
    pricePerKg: 9.99,
    category: "Meat and Poultry",
  },
  {
    id: 7,
    name: "Steak",
    image: steak,
    description: "Steak, paquet de 500g",
    price: 6.49,
    unit: "500g",
    pricePerKg: 12.98,
    category: "Meat and Poultry",
  },
  {
    id: 8,
    name: "Saumon",
    image: salmon,
    description: "Frais, pêche sauvage, 1kg",
    price: 19.99,
    unit: "kg",
    pricePerKg: 19,
    category: "Meat and Poultry",
  },
];

export default groceryItems;
