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
    name: "Apple",
    image: apple,
    description: "Sold individually, average weight 170g",
    price: 2.99,
    unit: "ea.",
    pricePerKg: 5.6,
  },
  {
    id: 2,
    name: "Banana",
    image: banana,
    description: "Sold by the bunch, approximately 6 bananas",
    price: 3.49,
    unit: "bunch",
    pricePerKg: 2.8,
  },
  {
    id: 3,
    name: "Orange",
    image: orange,
    description: "Sold individually, average weight 200g",
    price: 1.99,
    unit: "ea.",
    pricePerKg: 4.5,
  },
  {
    id: 4,
    name: "Milk",
    image: milk,
    description: "1 liter, 2% fat",
    price: 1.79,
    unit: "L",
    pricePerLitre: 1.79,
  },
  {
    id: 5,
    name: "Yogurt",
    image: yogurt,
    description: "2% fat, 750g tub",
    price: 2.99,
    unit: "750g",
    pricePerEgg: null,
  },
  {
    id: 6,
    name: "Chicken Breast",
    image: chicken,
    description: "Boneless, skinless, 1kg pack",
    price: 9.99,
    unit: "kg",
    pricePerKg: 9.99,
  },
  {
    id: 7,
    name: "Steak",
    image: steak,
    description: "Steak, 500g pack",
    price: 6.49,
    unit: "500g",
    pricePerKg: 12.98,
  },
  {
    id: 8,
    name: "Salmon",
    image: salmon,
    description: "Fresh, wild-caught, 1kg",
    price: 19.99,
    unit: "kg",
    pricePerKg: 19,
  },
];

export default groceryItems;
