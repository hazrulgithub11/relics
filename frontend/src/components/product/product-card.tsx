import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="aspect-square overflow-hidden bg-card">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-85"
        />
      </div>

      {product.badge && (
        <p
          className={cn(
            "mt-3 text-sm font-medium",
            product.badge === "Just In" || product.badge === "Sale"
              ? "text-accent"
              : "text-muted-foreground",
          )}
        >
          {product.badge}
        </p>
      )}

      <h3
        className={cn(
          "text-base font-medium leading-tight",
          product.badge ? "mt-1" : "mt-3",
        )}
      >
        {product.brand}
      </h3>

      <p className="mt-0.5 text-sm text-muted-foreground">{product.name}</p>

      <p className="mt-2 text-base font-medium">{product.price}</p>
    </article>
  );
}
