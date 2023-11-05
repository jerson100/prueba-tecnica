import { Variants } from "framer-motion";

export const SignInVariantsContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const FormVariantsContainer: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: "360deg",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

export const SignInGroupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const SignInGroupYVariants: Variants = {
  hidden: (value) => ({
    opacity: 0,
    y: 30 * value,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
