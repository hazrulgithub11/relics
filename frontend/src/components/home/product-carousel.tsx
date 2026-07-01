import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";
import {
  ScrollReveal,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/motion/scroll-reveal";
import { HomeProductCard } from "./home-product-card";

type ProductCarouselProps = {
  heading: string;
  products: Product[];
};

export function ProductCarousel({ heading, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <section className="relative bg-background py-4 pb-10">
      <ScrollReveal>
        <h2 className="py-8 text-center text-sm font-bold tracking-wide uppercase">
          {heading}
        </h2>
      </ScrollReveal>

      <div className="relative">
        <motion.div
          ref={scrollRef}
          onScroll={updateProgress}
          className="flex gap-4 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] lg:px-12 [&::-webkit-scrollbar]:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItemVariants}
              className="w-[calc(50%-0.5rem)] shrink-0 snap-start sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <HomeProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <button
          type="button"
          aria-label="Scroll products"
          onClick={scrollNext}
          className="absolute top-1/3 right-2 hidden -translate-y-1/2 p-2 text-muted-foreground transition-colors hover:text-foreground lg:block"
        >
          <ChevronRight className="size-6" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mx-auto mt-8 h-px w-48 bg-border">
        <div
          className="h-px bg-foreground transition-[width] duration-150"
          style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
        />
      </div>
    </section>
  );
}
