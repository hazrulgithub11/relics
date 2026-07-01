export const categories = [
  "All Shirts",
  "Graphic Tees",
  "Band & Music",
  "Sports Heritage",
  "Collegiate",
  "Brand Archive",
  "Single Stitch",
  "Rare Finds",
] as const;

export const mobileFilterChips = [
  { id: "era", label: "Era", count: 1 },
  { id: "price", label: "Shop By Price", count: 0 },
] as const;

export const filterSections = [
  {
    id: "era",
    label: "Era",
    options: ["70s", "80s", "90s", "Y2K (2000s)"],
  },
  {
    id: "brand",
    label: "Brand",
    options: [
      "Champion",
      "Levi's",
      "Ralph Lauren",
      "Tommy Hilfiger",
      "Carhartt",
      "Russell Athletic",
      "Hanes",
      "Starter",
      "FUBU",
      "Reebok",
      "Fila",
      "Kappa",
    ],
  },
  {
    id: "condition",
    label: "Condition",
    options: ["Mint", "Excellent", "Good", "Fair"],
  },
  {
    id: "price",
    label: "Shop By Price",
    options: ["Under RM 150", "RM 150–RM 250", "RM 250–RM 350", "RM 350+"],
  },
  {
    id: "size",
    label: "Size",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
] as const;
