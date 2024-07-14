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
    nutritionalFacts: {
      calories: 95,
      protein: "0.5g",
      carbs: "25g",
      fat: "0.3g",
    },
  },
  {
    id: 2,
    name: "Banane",
    image: banana,
    description: "Vendu par botte, environ 6 bananes",
    price: 3.49,
    unit: "botte",
    pricePerKg: 2.8,
    category: "Produits frais",
    nutritionalFacts: {
      calories: 105,
      protein: "1.3g",
      carbs: "27g",
      fat: "0.3g",
    },
  },
  {
    id: 3,
    name: "Orange",
    image: orange,
    description: "Vendu à l'unité, poids moyen 200g",
    price: 1.99,
    unit: "u.",
    pricePerKg: 4.5,
    category: "Produits frais",
    nutritionalFacts: {
      calories: 62,
      protein: "1.2g",
      carbs: "15.4g",
      fat: "0.2g",
    },
  },
  {
    id: 4,
    name: "Lait",
    image: milk,
    description: "1 litre, 2% de matière grasse",
    price: 1.79,
    unit: "L",
    pricePerLitre: 1.79,
    category: "Produits laitiers",
    nutritionalFacts: {
      calories: 122,
      protein: "8g",
      carbs: "12g",
      fat: "4.8g",
    },
  },
  {
    id: 5,
    name: "Yaourt",
    image: yogurt,
    description: "2% de matière grasse, pot de 750g",
    price: 2.99,
    unit: "750g",
    pricePerEgg: null,
    category: "Produits laitiers",
    nutritionalFacts: {
      calories: 150,
      protein: "8g",
      carbs: "15g",
      fat: "4g",
    },
  },
  {
    id: 6,
    name: "Blanc de poulet",
    image: chicken,
    description: "Sans os, sans peau, paquet de 1kg",
    price: 9.99,
    unit: "kg",
    pricePerKg: 9.99,
    category: "Viande et volaille",
    nutritionalFacts: {
      calories: 165,
      protein: "31g",
      carbs: "0g",
      fat: "3.6g",
    },
  },
  {
    id: 7,
    name: "Steak",
    image: steak,
    description: "Steak, paquet de 500g",
    price: 6.49,
    unit: "500g",
    pricePerKg: 12.98,
    category: "Viande et volaille",
    nutritionalFacts: {
      calories: 679,
      protein: "62.6g",
      carbs: "0g",
      fat: "48.4g",
    },
  },
  {
    id: 8,
    name: "Saumon",
    image: salmon,
    description: "Frais, pêche sauvage, 1kg",
    price: 19.99,
    unit: "kg",
    pricePerKg: 19,
    category: "Viande et volaille",
    nutritionalFacts: {
      calories: 206,
      protein: "22g",
      carbs: "0g",
      fat: "13g",
    },
  },
];

export default groceryItems;
