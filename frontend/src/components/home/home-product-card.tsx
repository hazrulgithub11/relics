import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type HomeProductCardProps = {
  product: Product;
};

function getBadgeLabel(badge?: string) {
  if (badge === "Just In") return "NEW";
  if (badge === "Sale") return "SALE";
  if (badge === "Rare Find") return "RARE";
  return badge;
}

export function HomeProductCard({ product }: HomeProductCardProps) {
  const badgeLabel = getBadgeLabel(product.badge);
  const title = `${product.brand} ${product.name}`;

  return (
    <article className="group w-[calc(50%-0.5rem)] shrink-0 snap-start cursor-pointer sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)]">
      <div className="relative aspect-square overflow-hidden bg-card">
        <img
          src={product.image}
          alt={title}
          className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-85"
        />
        {badgeLabel && (
          <span className="absolute top-3 left-3 bg-background px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase">
            {badgeLabel}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-sm leading-snug font-normal">{title}</h3>
      <p className="mt-1 text-sm">{product.price}</p>
      {product.sizes && (
        <p
          className={cn(
            "mt-1 text-xs text-muted-foreground tracking-wide uppercase",
          )}
        >
          {product.sizes}
        </p>
      )}
    </article>
  );
}
