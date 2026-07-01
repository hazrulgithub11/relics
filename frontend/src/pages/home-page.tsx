import { heroes, carousels } from "@/data/home-content";
import { products } from "@/data/products";
import { HeroSection } from "@/components/home/hero-section";
import { ProductCarousel } from "@/components/home/product-carousel";

function getProductsByIds(ids: readonly string[]) {
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => p !== undefined);
}

export function HomePage() {
  const [hero1, hero2, hero3] = heroes;
  const [carousel1, carousel2] = carousels;

  return (
    <div>
      <HeroSection {...hero1} />
      <ProductCarousel
        heading={carousel1.heading}
        products={getProductsByIds(carousel1.productIds)}
      />
      <HeroSection {...hero2} />
      <ProductCarousel
        heading={carousel2.heading}
        products={getProductsByIds(carousel2.productIds)}
      />
      <HeroSection {...hero3} />
    </div>
  );
}
