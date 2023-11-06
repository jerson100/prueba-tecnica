import { Flex, Skeleton } from "@chakra-ui/react";

const LoadingTablePagination = () => {
  return (
    <Flex
      flexDir={{
        base: "column",
        xl: "row",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      rowGap={4}
      px={4}
    >
      <Flex columnGap={4}>
        <Skeleton height="40px" width="40px" />
        <Skeleton height="40px" width="40px" />
      </Flex>
      <Flex columnGap={8} alignItems={"center"}>
        <Skeleton
          height="20px"
          width={{
            base: "50px",
            md: "100px",
          }}
        />
        <Skeleton
          height="40px"
          width={{
            base: "100px",
            md: "120px",
          }}
        />
        <Skeleton
          height="40px"
          width={{
            base: "100px",
            md: "120px",
          }}
        />
      </Flex>
      <Flex columnGap={4}>
        <Skeleton height="40px" width="40px" />
        <Skeleton height="40px" width="40px" />
      </Flex>
    </Flex>
  );
};

export default LoadingTablePagination;
