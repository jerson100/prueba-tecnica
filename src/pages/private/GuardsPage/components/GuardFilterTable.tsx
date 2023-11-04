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
// import { useQueryClient } from "@tanstack/react-query";

const GuardFilterTable = () => {
  const { initialDate, finalDate, loading, setDates } = useGuardStore(
    useShallow((state) => state)
  );
  //   console.log(loading);
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
          <Grid gridTemplateColumns={"1fr 1fr auto"} gap={"4"}>
            <GridItem>
              <FormControl
                isInvalid={!!errors.initialDate && touched.initialDate}
              >
                <FormLabel htmlFor="initialDate">Fecha Guardia</FormLabel>
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
            <GridItem>
              <FormControl isInvalid={!!errors.finalDate && touched.finalDate}>
                <FormLabel htmlFor="finalDate">Fecha Guardia</FormLabel>
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
            <GridItem>
              <Button
                colorScheme="blue"
                isLoading={loading}
                type="submit"
                mt={8}
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
