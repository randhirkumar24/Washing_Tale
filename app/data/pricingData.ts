export interface PricingItem {
  id: number;
  name: string;
  price: number | string;
}

export interface PricingCategory {
  category: string;
  description: string;
  items: PricingItem[];
}

export const laundryPricingData: PricingCategory[] = [
  {
    category: "Bedding & Linens",
    description: "Bed sheets, covers, and bedroom textiles",
    items: [
      { id: 1, name: "Double Bedsheet", price: 19 },
      { id: 2, name: "Single Bedsheet", price: 15 },
      { id: 3, name: "Single Duvet cover", price: 25 },
      { id: 4, name: "Double Duvet cover", price: 39 },
      { id: 9, name: "Mattress Protector(s)", price: 15 },
      { id: 10, name: "Mattress Protector(B)", price: 22 },
      { id: 11, name: "Pillow Cover", price: 15 },
      { id: 21, name: "Duvet", price: 150 },
      { id: 14, name: "Blanket", price: "100-300" }
    ]
  },
  {
    category: "Towels & Bath Items",
    description: "All types of towels and bathroom textiles",
    items: [
      { id: 5, name: "Bath Towel", price: 15 },
      { id: 6, name: "Hand Towel", price: 8 },
      { id: 7, name: "Face towel", price: 6 },
      { id: 8, name: "Bathmat", price: 12 }
    ]
  },
  {
    category: "Clothing",
    description: "Personal garments and apparel",
    items: [
      { id: 15, name: "Pant", price: 20 },
      { id: 16, name: "Shirt", price: 25 },
      { id: 19, name: "T-shirt", price: 20 },
      { id: 20, name: "Coat", price: 50 },
      { id: 25, name: "Tie", price: 10 },
      { id: 26, name: "Waist Coat", price: 40 },
      { id: 24, name: "Shocks", price: 20 }
    ]
  },
  {
    category: "Professional Wear",
    description: "Chef and professional uniforms",
    items: [
      { id: 17, name: "Chef Coat", price: 35 },
      { id: 18, name: "Chef Apron", price: 20 }
    ]
  },
  {
    category: "Home Textiles",
    description: "Curtains, table linens, and decorative items",
    items: [
      { id: 23, name: "Window Curtain", price: "100-150" },
      { id: 27, name: "Table Cloth", price: 20 },
      { id: 28, name: "Table Top", price: 18 },
      { id: 22, name: "Table Bow", price: 15 },
      { id: 12, name: "Runner", price: 10 },
      { id: 13, name: "Cushion Cover", price: 7 },
      { id: 31, name: "Chair Cover", price: 15 },
      { id: 29, name: "Frill(s)", price: 50 },
      { id: 30, name: "Frill(B)", price: 65 }
    ]
  },
  {
    category: "Cleaning & Kitchen Items",
    description: "Cleaning cloths, napkins, and kitchen textiles",
    items: [
      { id: 32, name: "Napkin", price: 8 },
      { id: 33, name: "Napron", price: 10 },
      { id: 34, name: "Wiping Cloth", price: 20 },
      { id: 35, name: "Duster", price: 20 },
      { id: 36, name: "Ribben", price: 10 },
      { id: 37, name: "Dry Mop", price: 10 }
    ]
  }
];

// Flat array for backward compatibility
export const pricingData: PricingItem[] = laundryPricingData.flatMap(category => category.items);

export const WEIGHT_PRICE_PER_KG = 49; 