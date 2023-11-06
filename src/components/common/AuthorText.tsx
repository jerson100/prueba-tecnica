import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Box, Link, Text } from "@chakra-ui/react";
import { AuthorVariants } from "../layouts/MainPageLayout/mainlayout.variants";

const AuthorText = () => {
  return (
    <Text
      as={motion.p}
      variants={AuthorVariants}
      display={"flex"}
      alignItems={"center"}
    >
      By
      <Link
        href="https://jersonramirez.studio"
        isExternal
        color="blue.500"
        mx="2"
        fontWeight={"bold"}
      >
        Jerson Ramírez{" "}
        <Box
          as="span"
          display={{
            base: "none",
            md: "inline",
          }}
        >
          Ortiz
        </Box>
      </Link>
      <Box
        as="span"
        display={{
          base: "none",
          lg: "inline",
        }}
        mr={2}
      >
        with
      </Box>
      <motion.span
        animate={{
          display: "inline-flex",
          scale: [1, 1.2, 1], // Escala del corazón en diferentes momentos
        }}
        transition={{
          duration: 1, // Duración de una pulsación completa (en segundos)
          repeat: Infinity, // Repite la animación infinitamente
        }}
      >
        <FaHeart color="red" />
      </motion.span>
    </Text>
  );
};

export default AuthorText;
