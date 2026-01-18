import iphone17ProMax from "../images/apple-iphone-17-pro-max.avif";


export const products = [
  {
    id: 1,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 74999,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    features: {
      battery: "4000mAh",
      display: "6.2 inch AMOLED",
      camera: "50MP Triple",
      processor: "Snapdragon 8 Gen 3",
    },
  },
  {
    id: 2,
    name: "iPhone 15",
    brand: "Apple",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
    features: {
      battery: "3349mAh",
      display: "6.1 inch OLED",
      camera: "48MP Dual",
      processor: "A16 Bionic",
    },
  },
  {
    id: 3,
    name: "Pixel 8",
    brand: "Google",
    price: 64999,
    image:"https://images.unsplash.com/photo-1763107262278-eaac460e84d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   , // image:
    //   "https://images.unsplash.com/photo-1603899123005-2f7c1a4a4f7f?w=600",
    features: {
      battery: "4575mAh",
      display: "6.2 inch OLED",
      camera: "50MP Dual",
      processor: "Google Tensor G3",
    },
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600",
    features: {
      battery: "5400mAh",
      display: "6.82 inch AMOLED",
      camera: "50MP Triple",
      processor: "Snapdragon 8 Gen 3",
    },
  },
  {
    id: 5,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
    features: {
      battery: "4610mAh",
      display: "6.36 inch AMOLED",
      camera: "50MP Triple",
      processor: "Snapdragon 8 Gen 3",
    },
  },
  {
    id: 6,
    name: "Nothing Phone 2",
    brand: "Nothing",
    price: 44999,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQem8CceMapmmiBc3UuKYJNjKxFL5zK4PlVZg&s",
    // image:
    //   "https://images.unsplash.com/photo-1661961111184-1133f8d2e6d0?w=600",
    features: {
      battery: "4700mAh",
      display: "6.7 inch OLED",
      camera: "50MP Dual",
      processor: "Snapdragon 8+ Gen 1",
    },
  },
  {
    id: 7,
    name: "Realme GT 6",
    brand: "Realme",
    price: 39999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    features: {
      battery: "5500mAh",
      display: "6.78 inch AMOLED",
      camera: "50MP Triple",
      processor: "Snapdragon 8s Gen 3",
    },
  },
  {
    id: 8,
    name: "Motorola Edge 50",
    brand: "Motorola",
    price: 34999,
image:"data:image/jpeg;base64,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",
    // image:
    //   "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600",
    
      features: {
      battery: "5000mAh",
      display: "6.7 inch pOLED",
      camera: "50MP Triple",
      processor: "Snapdragon 7 Gen 3",
    },
  },
];
