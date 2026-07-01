import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-8 px-6 pb-12 md:grid-cols-3 lg:px-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
