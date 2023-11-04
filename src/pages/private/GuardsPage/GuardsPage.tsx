import { Helmet } from "react-helmet-async";
import { StatusCodes } from "http-status-codes";
import useAllGuardsByIdEquip from "@/hooks/useGuards";
import LoadingGuardPage from "./components/LoadingGuardPage";
import ErrorGuardsPage from "./components/ErrorGuardsPage";
import GuardsTable from "./components/GuardTable/GuardsTable";
import { Container } from "@chakra-ui/react";
import NewGuardForm from "./components/NewGuardForm";

const GuardsPage = () => {
  const { error, loading } = useAllGuardsByIdEquip();

  if (loading) return <LoadingGuardPage />;

  if (error) {
    return (
      <ErrorGuardsPage
        msg={
          error.status === StatusCodes.FORBIDDEN
            ? "No tiene privilegios para poder ver este recurso"
            : error.message
        }
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Guards | GuardsApp</title>
      </Helmet>
      <Container maxW={"6xl"}>
        {/* <Grid gridTemplateColumns={"1fr auto"}> */}
        {/* <GridItem> */}
        <GuardsTable />
        {/* </GridItem> */}
        {/* <GridItem> */}
        <NewGuardForm />
        {/* </GridItem>
        </Grid> */}
      </Container>
    </>
  );
};

export default GuardsPage;
