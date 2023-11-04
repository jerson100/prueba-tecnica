import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAllGuardsByIdEquip from "@/hooks/useGuards";
import LoadingGuardPage from "./components/LoadingGuardPage";
import GuardsTable from "./components/GuardsTable";
import { Container, Flex } from "@chakra-ui/react";
import GuardFilterTable from "./components/GuardFilterTable";
import NewGuardModal from "./components/NewGuardModal";

const GuardsPage = () => {
  const [firstLoading, setFirstLoading] = useState(true);
  const { error, loading } = useAllGuardsByIdEquip();

  useEffect(() => {
    if (firstLoading && !loading) {
      setFirstLoading(false);
    }
  }, [firstLoading, loading]);

  //   if (error) {
  //     return (
  //       <ErrorGuardsPage
  //         msg={
  //           error.status === StatusCodes.FORBIDDEN
  //             ? "No tiene privilegios para poder ver este recurso"
  //             : error.message
  //         }
  //       />
  //     );
  //   }

  return (
    <>
      <Container maxW={"6xl"}>
        {loading && firstLoading ? (
          <LoadingGuardPage />
        ) : (
          <>
            <Helmet>
              <title>Guards | GuardsApp</title>
            </Helmet>
            <Flex flexDir={"column"} rowGap={6}>
              <GuardFilterTable />
              <Flex justifyContent={"flex-end"}>
                <NewGuardModal />
              </Flex>
              <GuardsTable />
            </Flex>
          </>
        )}
      </Container>
    </>
  );
};

export default GuardsPage;
