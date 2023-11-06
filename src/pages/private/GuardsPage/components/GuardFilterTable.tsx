import useGuardStore from "@/stores/guards.store";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useShallow } from "zustand/react/shallow";
import { GuardsFilterSchema } from "../schemasValidation";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { YVariants } from "../animation.variants";

const GuardFilterTable = () => {
  const { initialDate, finalDate, loading, setDates } = useGuardStore(
    useShallow((state) => state)
  );
  return (
    <Formik
      onSubmit={setDates}
      initialValues={{
        initialDate: initialDate,
        finalDate: finalDate,
      }}
      validationSchema={GuardsFilterSchema}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr) auto",
            }}
            gap={"4"}
          >
            <GridItem as={motion.div} variants={YVariants} custom={-1}>
              <FormControl
                isInvalid={!!errors.initialDate && touched.initialDate}
              >
                <FormLabel htmlFor="initialDate">Fecha Inicial</FormLabel>
                <Field
                  as={Input}
                  type="date"
                  id="initialDate"
                  autoComplete="off"
                  name="initialDate"
                  variant="filled"
                />
                <FormErrorMessage>{errors.initialDate}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem as={motion.div} variants={YVariants} custom={1}>
              <FormControl isInvalid={!!errors.finalDate && touched.finalDate}>
                <FormLabel htmlFor="finalDate">Fecha Final</FormLabel>
                <Field
                  as={Input}
                  type="date"
                  id="finalDate"
                  autoComplete="off"
                  name="finalDate"
                  variant="filled"
                />
                <FormErrorMessage>{errors.finalDate}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem
              gridColumn={{
                base: "1 / 2",
                sm: "1 / span 2",
                md: "3 / span 1",
              }}
              as={motion.div}
              variants={YVariants}
              custom={-1}
            >
              <Button
                colorScheme="blue"
                isLoading={loading}
                type="submit"
                w={"full"}
                mt={{
                  md: 8,
                }}
                rightIcon={<SearchIcon />}
              >
                Filtrar
              </Button>
            </GridItem>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default GuardFilterTable;
