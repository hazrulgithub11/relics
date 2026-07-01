import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUpVariants}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ScrollStaggerProps = HTMLMotionProps<"div"> & {
  amount?: number;
};

export function ScrollStagger({
  children,
  className,
  amount = 0.1,
  ...props
}: ScrollStaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
