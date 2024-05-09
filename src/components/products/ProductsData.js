const productsData = [
  {
    id: 1,
    name: 'Apple Vision Pro',
    description: "",
    category: "TV",
    imageURL: "AppleVisionPro.jpeg",
    price: 3499.99, 
    quantity: 5
  },
  {
    id: 2,
    name: 'PS5',
    description: "",
    category: "Gaming Console",
    imageURL: "PS5.jpeg",
    price: 499.99, 
    quantity: 10
  },
  {
    id: 3,
    name: "Iphone 15",
    description: "",
    category: "Phone",
    imageURL: "Iphone15.jpeg",
    price: 1299.99, 
    quantity: 25
  },
  {
    id: 4,
    name: "MacBook Pro",
    description: "",
    category: "Computer",
    imageURL: "MacBookPro.jpeg",
    price: 2499.99, 
    quantity: 10
  },
  {
    id: 5,
    name: "Google Pixel 6",
    description: "",
    category: "Phone",
    imageURL: "GooglePixel6.jpeg",
    price: 899.99, 
    quantity: 15
  },
  {
    id: 6,
    name: "Dell XPS 15",
    description: "",
    category: "Computer",
    imageURL: "DellXPS15.jpeg",
    price: 1899.99, 
    quantity: 8
  },
  {
    id: 7,
    name: 'LG 34" Ultrawide Monitor',
    description: "",
    category: "Monitor",
    imageURL: "LG34UltrawideMonitor.jpeg",
    price: 999.99, 
    quantity: 20
  },
  {
    id: 8,
    name: 'Razer BlackWidow Keyboard',
    description: "",
    category: "Keyboard",
    imageURL: "RazerBlackWidowKeyboard.jpeg",
    price: 149.99, 
    quantity: 30
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S7+",
    description: "",
    category: "Tablet",
    imageURL: "SamsungGalaxyTabS7+.jpeg",
    price: 799.99, 
    quantity: 12
  },
  {
    id: 10,
    name: "HP Envy x360",
    description: "",
    category: "Laptop",
    imageURL: "HPEnvyx360.jpeg",
    price: 1199.99, 
    quantity: 18
  },
  {
    id: 11,
    name: 'Acer 24" Gaming Monitor',
    description: "",
    category: "Monitor",
    imageURL: "Acer24GamingMonitor.jpeg",
    price: 399.99, 
    quantity: 35
  },
  {
    id: 12,
    name: 'Corsair K70 RGB Keyboard',
    description: "",
    category: "Keyboard",
    imageURL: "CorsairK70RGBKeyboard.jpeg",
    price: 129.99, 
    quantity: 40
  },
  {
    id: 13,
    name: "OnePlus 9 Pro",
    description: "",
    category: "Phone",
    imageURL: "OnePlus9Pro.jpeg",
    price: 1099.99, 
    quantity: 20
  },
  {
    id: 14,
    name: "Microsoft Surface Laptop 4",
    description: "",
    category: "Laptop",
    imageURL: "MicrosoftSurfaceLaptop4.jpeg",
    price: 1599.99, 
    quantity: 15
  },
  {
    id: 15,
    name: 'ASUS 27" Curved Gaming Monitor',
    description: "",
    category: "Monitor",
    imageURL: "ASUS27CurvedGamingMonitor.jpeg",
    price: 599.99, 
    quantity: 25
  },
  {
    id: 16,
    name: 'SteelSeries Apex Pro Keyboard',
    description: "",
    category: "Keyboard",
    imageURL: "SteelSeriesApexProKeyboard.jpeg",
    price: 199.99, 
    quantity: 20
  },
  {
    id: 17,
    name: "Apple iPad Air (2022)",
    description: "",
    category: "Tablet",
    imageURL: "AppleiPadAir(2022).jpeg",
    price: 649.99, 
    quantity: 10
  },
  {
    id: 18,
    name: "Sony Xperia 1 III",
    description: "",
    category: "Phone",
    imageURL: "SonyXperia1III.jpeg",
    price: 1199.99, 
    quantity: 18
  },
  {
    id: 19,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "",
    category: "Laptop",
    imageURL: "LenovoThinkPadX1Carbon.jpeg",
    price: 1799.99, 
    quantity: 12
  },
  {
    id: 20,
    name: 'ViewSonic 32" 4K Monitor',
    description: "",
    category: "Monitor",
    imageURL: "ViewSonic324KMonitor.jpeg",
    price: 899.99, 
    quantity: 22
  },
  {
    id: 21,
    name: 'Logitech G Pro X Keyboard',
    description: "",
    category: "Keyboard",
    imageURL: "LogitechGProXKeyboard.jpeg",
    price: 99.99, 
    quantity: 30
  },
  {
    id: 22,
    name: "Samsung Galaxy Watch 4",
    description: "",
    category: "Wearable",
    imageURL: "SamsungGalaxyWatch4.jpeg",
    price: 349.99, 
    quantity: 15
  },
  {
    id: 23,
    name: "Google Nest Hub Max",
    description: "",
    category: "Smart Home",
    imageURL: "GoogleNestHubMax.jpeg",
    price: 229.99, 
    quantity: 25
  },
  {
    id: 24,
    name: 'ASUS ROG Phone 5',
    description: "",
    category: "Phone",
    imageURL: "ASUSROGPhone5.jpeg",
    price: 999.99, 
    quantity: 20
  },
  {
    id: 25,
    name: 'Microsoft Surface Pro 8',
    description: "",
    category: "Tablet",
    imageURL: "MicrosoftSurfacePro8.jpeg",
    price: 899.99, 
    quantity: 15
  },
  {
    id: 26,
    name: 'Alienware 34" Ultrawide Gaming Monitor',
    description: "",
    category: "Monitor",
    imageURL: "Alienware34UltrawideGamingMonitor.jpeg",
    price: 1499.99, 
    quantity: 10
  },
  {
    id: 27,
    name: 'Razer Huntsman Elite Keyboard',
    description: "",
    category: "Keyboard",
    imageURL: "RazerHuntsmanEliteKeyboard.jpeg",
    price: 179.99, 
    quantity: 25
  },
  {
    id: 28,
    name: "Fitbit Charge 5",
    description: "",
    category: "Wearable",
    imageURL: "FitbitCharge5.jpeg",
    price: 149.99, 
    quantity: 30
  },
  {
    id: 29,
    name: "Amazon Echo Show 15",
    description: "",
    category: "Smart Home",
    imageURL: "AmazonEchoShow15.jpeg",
    price: 299.99, 
    quantity: 20
  },
  {
    id: 30,
    name: 'OnePlus Buds Pro',
    description: "",
    category: "Headphones",
    imageURL: "OnePlusBudsPro.jpeg",
    price: 129.99, 
    quantity: 5
  }
];
export default productsData