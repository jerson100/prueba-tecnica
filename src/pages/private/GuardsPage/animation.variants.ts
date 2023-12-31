import { Variants } from "framer-motion";

export const TableContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerDirection: -1,
      staggerChildren: 0.1,
    },
  },
};

export const TableRowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export const YVariants: Variants = {
  hidden: (value) => ({
    opacity: 0,
    y: 20 * value,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const XVariants: Variants = {
  hidden: (value) => ({
    opacity: 0,
    x: 20 * value,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
