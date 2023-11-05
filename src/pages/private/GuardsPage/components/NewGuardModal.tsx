import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import NewGuardForm from "./NewGuardForm";
import { motion } from "framer-motion";
import { XVariants } from "../animation.variants";

const NewGuardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  //   const finalRef = useRef(null);

  return (
    <>
      <Button
        as={motion.button}
        variants={XVariants}
        custom={-1}
        colorScheme="blue"
        onClick={onOpen}
      >
        Crear Guardia
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}
      <Modal
        initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crea un nuevo Guardia</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody pb={6}> */}
          <NewGuardForm onCloseModal={onClose} />
          {/* </ModalBody> */}
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewGuardModal;
