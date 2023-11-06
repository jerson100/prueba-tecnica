import { Helmet } from "react-helmet-async";
import {
  LoadingTable,
  LoadingTablePagination,
} from "@/components/common/loadings";
import LoadingFilter from "./LoadingFilter";
import { Flex, Skeleton } from "@chakra-ui/react";

const LoadingGuardPage = () => {
  return (
    <>
      <Helmet>
        <title>Loading...| GuardsApp</title>
        <meta name="description" content="List of guards" />
        <meta name="author" content="Jerson Ramírez Ortiz" />
      </Helmet>
      <Flex flexDirection={"column"} rowGap={6}>
        <LoadingFilter />
        <Flex justifyContent={"flex-end"}>
          <Skeleton
            height={"40px"}
            width={{
              base: "100%",
              md: "131px",
            }}
          />
        </Flex>
        <LoadingTable rows={8} columns={6} />
        <LoadingTablePagination />
      </Flex>
    </>
  );
};

export default LoadingGuardPage;
