export const announcement = {
  message: "Free Shipping on Orders Over RM 150",
  linkLabel: "Read More",
  linkHref: "#",
};

export const heroes = [
  {
    id: "archive-drop",
    image: "/assets/first.png",
    eyebrow: "Limited Edition Online Exclusive",
    title: "The Archive Drop",
    titleStyle: "script" as const,
    cta: { label: "Shop the Re-Stock", href: "/men/clothing" },
    align: "center" as const,
  },
  {
    id: "collectors-edit",
    image: "/assets/second.png",
    eyebrow: "Relics & Friends",
    title: "Collector's Edit",
    titleStyle: "serif" as const,
    subtitle: "Curated vintage finds from our community",
    cta: { label: "Explore the Edit", href: "/men/clothing" },
    align: "center" as const,
  },
  {
    id: "new-arrivals",
    image: "/assets/third.png",
    eyebrow: "Also New",
    title: "New Arrivals Vol. 3",
    titleStyle: "serif" as const,
    align: "bottom-center" as const,
  },
] as const;

export const carousels = [
  {
    id: "archive-drop",
    heading: "Shop the Archive Drop",
    productIds: ["1", "2", "3", "4"],
  },
  {
    id: "collectors-edit",
    heading: "Shop the Edit",
    productIds: ["5", "6", "7", "8"],
  },
] as const;
