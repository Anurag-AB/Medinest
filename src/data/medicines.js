const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    price: 50,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  },
  {
    id: 2,
    name: "Vitamin C Tablets",
    price: 120,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
  },
  {
    id: 3,
    name: "Hand Sanitizer",
    price: 80,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57",
  },
  {
    id: 4,
    name: "Face Mask",
    price: 40,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5",
  },
  {
    id: 5,
    name: "Cough Syrup",
    price: 95,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462",
  },
  {
    id: 6,
    name: "Blood Pressure Monitor",
    price: 1499,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    id: 7,
    name: "Digital Thermometer",
    price: 299,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 8,
    name: "Protein Powder",
    price: 899,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
  },
  {
    id: 9,
    name: "Calcium Tablets",
    price: 220,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
  },
  {
    id: 10,
    name: "Pain Relief Spray",
    price: 180,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    id: 11,
    name: "Insulin Injection",
    price: 650,
    category: "Diabetes",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 12,
    name: "Eye Drops",
    price: 90,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831",
  },
  {
    id: 13,
    name: "Antibiotic Capsules",
    price: 160,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
  },
  {
    id: 14,
    name: "Glucose Powder",
    price: 75,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1622484212850-eb596d769edc",
  },
  {
    id: 15,
    name: "Bandage Roll",
    price: 60,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  },
  {
    id: 16,
    name: "Antiseptic Liquid",
    price: 110,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
  },
  {
    id: 17,
    name: "Omega 3 Capsules",
    price: 450,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
  },
  {
    id: 18,
    name: "Multivitamin Syrup",
    price: 140,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8",
  },
  {
    id: 19,
    name: "Baby Lotion",
    price: 210,
    category: "Baby Care",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  },
  {
    id: 20,
    name: "Skin Cream",
    price: 170,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
  {
    id: 21,
    name: "N95 Mask",
    price: 120,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5",
  },
  {
    id: 22,
    name: "Pulse Oximeter",
    price: 999,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 23,
    name: "Cold Relief Tablets",
    price: 85,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  },
  {
    id: 24,
    name: "Painkiller Tablets",
    price: 65,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
  },
  {
    id: 25,
    name: "Herbal Tea",
    price: 190,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 26,
    name: "Aloe Vera Gel",
    price: 250,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 27,
    name: "Hair Oil",
    price: 180,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  },
  {
    id: 28,
    name: "Shampoo",
    price: 220,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
  },
  {
    id: 29,
    name: "Face Wash",
    price: 160,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  },
  {
    id: 30,
    name: "Toothpaste",
    price: 90,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
  },
  {
    id: 31,
    name: "Mouth Wash",
    price: 130,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    id: 32,
    name: "Energy Drink",
    price: 70,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
  },
  {
    id: 33,
    name: "Diabetes Care Kit",
    price: 1999,
    category: "Diabetes",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    id: 34,
    name: "Nebulizer",
    price: 2499,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 35,
    name: "Steam Inhaler",
    price: 599,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
  },
  {
    id: 36,
    name: "Vitamin D Capsules",
    price: 320,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
  },
  {
    id: 37,
    name: "Joint Pain Oil",
    price: 260,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    id: 38,
    name: "First Aid Box",
    price: 799,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  },
  {
    id: 39,
    name: "Cotton Roll",
    price: 45,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  },
  {
    id: 40,
    name: "Antacid Syrup",
    price: 115,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462",
  },
  {
    id: 41,
    name: "Allergy Tablets",
    price: 140,
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  },
  {
    id: 42,
    name: "Baby Diapers",
    price: 550,
    category: "Baby Care",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
  },
  {
    id: 43,
    name: "Lip Balm",
    price: 75,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 44,
    name: "Sunscreen Lotion",
    price: 340,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
  {
    id: 45,
    name: "Fitness Gummies",
    price: 290,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
  },
  {
    id: 46,
    name: "Immunity Booster",
    price: 399,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
  },
  {
    id: 47,
    name: "Electrolyte Powder",
    price: 60,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1622484212850-eb596d769edc",
  },
  {
    id: 48,
    name: "Organic Honey",
    price: 320,
    category: "Supplements",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
  },
  {
    id: 49,
    name: "Green Tea",
    price: 250,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 50,
    name: "Protein Bars",
    price: 180,
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
  },
];

export default medicines;