import { Flex, Skeleton } from "@chakra-ui/react";

const LoadingTablePagination = () => {
  return (
    <Flex justifyContent={"space-between"} px={4}>
      <Flex columnGap={4}>
        <Skeleton height="40px" width="40px" />
        <Skeleton height="40px" width="40px" />
      </Flex>
      <Flex columnGap={8} alignItems={"center"}>
        <Skeleton height="20px" width="100px" />
        <Skeleton height="40px" width="120px" />
        <Skeleton height="40px" width="120px" />
      </Flex>
      <Flex columnGap={4}>
        <Skeleton height="40px" width="40px" />
        <Skeleton height="40px" width="40px" />
      </Flex>
    </Flex>
  );
};

export default LoadingTablePagination;
