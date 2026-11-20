
// Source: Poore & Nemecek (2018), "Reducing food's environmental impacts.

const FOODS = [
  
  { name: "Beef",            emoji: "🥩", category: "Meat",       co2PerKg: 60 },
  { name: "Lamb",             emoji: "🍖", category: "Meat",       co2PerKg: 24 },
  { name: "Cheese",           emoji: "🧀", category: "Dairy",      co2PerKg: 21 },
  { name: "Farmed Shrimp",    emoji: "🍤", category: "Seafood",    co2PerKg: 18 },
  { name: "Dark Chocolate",   emoji: "🍫", category: "Other",      co2PerKg: 19 },
  { name: "Coffee (beans)",   emoji: "☕", category: "Other",      co2PerKg: 17 },
  { name: "Pork",             emoji: "🥓", category: "Meat",       co2PerKg: 7.2 },
  { name: "Palm Oil",         emoji: "🫙", category: "Other",      co2PerKg: 7.6 },
  { name: "Chicken",          emoji: "🍗", category: "Meat",       co2PerKg: 6.1 },
  { name: "Olive Oil",        emoji: "🫒", category: "Other",      co2PerKg: 6.0 },
  { name: "Farmed Fish",      emoji: "🐟", category: "Seafood",    co2PerKg: 5.1 },
  { name: "Eggs",             emoji: "🥚", category: "Dairy",      co2PerKg: 4.2 },
  { name: "Rice",             emoji: "🍚", category: "Grains",     co2PerKg: 4.0 },
  { name: "Tofu",             emoji: "🧈", category: "Plant-based",co2PerKg: 3.0 },
  { name: "Milk",             emoji: "🥛", category: "Dairy",      co2PerKg: 3.2 },
  { name: "Bread / Wheat",    emoji: "🍞", category: "Grains",     co2PerKg: 1.6 },
  { name: "Oats",             emoji: "🥣", category: "Grains",     co2PerKg: 1.6 },
  { name: "Tomatoes",         emoji: "🍅", category: "Vegetables", co2PerKg: 1.4 },
  { name: "Cassava",          emoji: "🍠", category: "Vegetables", co2PerKg: 1.3 },
  { name: "Corn / Maize",     emoji: "🌽", category: "Grains",     co2PerKg: 1.0 },
  { name: "Beans / Lentils",  emoji: "🫘", category: "Plant-based",co2PerKg: 0.9 },
  { name: "Soy Milk",         emoji: "🥛", category: "Plant-based",co2PerKg: 0.9 },
  { name: "Peas",             emoji: "🫛", category: "Vegetables", co2PerKg: 1.0 },
  { name: "Bananas",          emoji: "🍌", category: "Fruit",      co2PerKg: 0.7 },
  { name: "Onions",           emoji: "🧅", category: "Vegetables", co2PerKg: 0.5 },
  { name: "Citrus Fruit",     emoji: "🍊", category: "Fruit",      co2PerKg: 0.4 },
  { name: "Apples",           emoji: "🍎", category: "Fruit",      co2PerKg: 0.4 },
  { name: "Potatoes",         emoji: "🥔", category: "Vegetables", co2PerKg: 0.4 },
  { name: "Root Vegetables",  emoji: "🥕", category: "Vegetables", co2PerKg: 0.4 },
  { name: "Nuts",             emoji: "🥜", category: "Plant-based",co2PerKg: 0.3 },
];


const EQUIVALENTS = {
  kmDriven: 0.19,        
  phoneCharges: 0.005,  
  treeDayAbsorption: 0.0575, 
};
