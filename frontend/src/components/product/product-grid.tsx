import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/motion/scroll-reveal";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <motion.div
      className="grid flex-1 grid-cols-2 gap-x-4 gap-y-8 px-6 pb-12 md:grid-cols-3 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerContainerVariants}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={staggerItemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
