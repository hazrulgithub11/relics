import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FilterSidebar } from "@/components/product/filter-sidebar";
import { ProductGrid } from "@/components/product/product-grid";
import { categories, mobileFilterChips } from "@/data/catalog";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function CatalogPage() {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div>
      <ScrollReveal className="px-6 pt-6 lg:px-12">
        <h1 className="text-2xl font-medium tracking-tight">
          Vintage Shirts{" "}
          <span className="text-muted-foreground">({products.length})</span>
        </h1>
      </ScrollReveal>

      <div className="mt-4 overflow-x-auto px-6 lg:hidden">
        <div className="flex w-max gap-6 border-b border-border pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "shrink-0 whitespace-nowrap text-sm transition-colors",
                activeCategory === category
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 overflow-x-auto px-6 pb-4 lg:hidden">
        <button
          type="button"
          aria-label="Open filters"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
        >
          <SlidersHorizontal className="size-4" strokeWidth={1.5} />
        </button>
        {mobileFilterChips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="flex shrink-0 items-center gap-1 rounded-full border border-border px-4 py-2 text-sm whitespace-nowrap"
          >
            {chip.label}
            {chip.count > 0 && (
              <span className="text-muted-foreground">({chip.count})</span>
            )}
            <ChevronDown className="size-4 text-muted-foreground" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      <div className="hidden items-center justify-end gap-4 px-6 pb-6 text-sm lg:flex lg:px-12">
        <button
          type="button"
          onClick={() => setFiltersVisible((value) => !value)}
          className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
        >
          <SlidersHorizontal className="size-4" strokeWidth={1.5} />
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
        <button
          type="button"
          className="flex items-center gap-1 transition-colors hover:text-muted-foreground"
        >
          Sort By
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex">
        <FilterSidebar className={cn(!filtersVisible && "lg:hidden")} />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
