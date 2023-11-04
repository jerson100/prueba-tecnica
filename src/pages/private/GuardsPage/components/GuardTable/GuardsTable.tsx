import { Flex } from "@chakra-ui/react";
import GuardFilterTable from "./components/GuardFilterTable";
import TableContent from "./components/TableContent";

const GuardsTable = () => {
  return (
    <Flex flexDir={"column"} rowGap={"4rem"}>
      <GuardFilterTable />
      <TableContent />
    </Flex>
  );
};

export default GuardsTable;
