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
    category: "Produce",
    nutritionalFacts: {
      calories: 95,
      protein: "0.5g",
      carbs: "25g",
      fat: "0.3g",
    },
  },
  {
    id: 2,
    name: "Banana",
    image: banana,
    description: "Sold by the bunch, approximately 6 bananas",
    price: 3.49,
    unit: "bunch",
    pricePerKg: 2.8,
    category: "Produce",
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
    description: "Sold individually, average weight 200g",
    price: 1.99,
    unit: "ea.",
    pricePerKg: 4.5,
    category: "Produce",
    nutritionalFacts: {
      calories: 62,
      protein: "1.2g",
      carbs: "15.4g",
      fat: "0.2g",
    },
  },
  {
    id: 4,
    name: "Milk",
    image: milk,
    description: "1 liter, 2% fat",
    price: 1.79,
    unit: "L",
    pricePerLitre: 1.79,
    category: "Dairy",
    nutritionalFacts: {
      calories: 122,
      protein: "8g",
      carbs: "12g",
      fat: "4.8g",
    },
  },
  {
    id: 5,
    name: "Yogurt",
    image: yogurt,
    description: "2% fat, 750g tub",
    price: 2.99,
    unit: "750g",
    pricePerEgg: null,
    category: "Dairy",
    nutritionalFacts: {
      calories: 150,
      protein: "8g",
      carbs: "15g",
      fat: "4g",
    },
  },
  {
    id: 6,
    name: "Chicken Breast",
    image: chicken,
    description: "Boneless, skinless, 1kg pack",
    price: 9.99,
    unit: "kg",
    pricePerKg: 9.99,
    category: "Meat and Poultry",
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
    description: "Steak, 500g pack",
    price: 6.49,
    unit: "500g",
    pricePerKg: 12.98,
    category: "Meat and Poultry",
    nutritionalFacts: {
      calories: 679,
      protein: "62.6g",
      carbs: "0g",
      fat: "48.4g",
    },
  },
  {
    id: 8,
    name: "Salmon",
    image: salmon,
    description: "Fresh, wild-caught, 1kg",
    price: 19.99,
    unit: "kg",
    pricePerKg: 19,
    category: "Meat and Poultry",
    nutritionalFacts: {
      calories: 206,
      protein: "22g",
      carbs: "0g",
      fat: "13g",
    },
  },
];

export default groceryItems;
