import { Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const LoadingFilter = () => {
  return (
    <Stack spacing={4} direction={"row"} alignItems={"flex-end"}>
      <Flex flexDirection={"column"} gap={4} flex={1}>
        <SkeletonText
          noOfLines={1}
          skeletonHeight={"24px"}
          width={"100%"}
          maxWidth={"100px"}
        />
        <Skeleton height={"40px"} />
      </Flex>
      <Flex flexDirection={"column"} gap={4} flex={1}>
        <SkeletonText
          noOfLines={1}
          skeletonHeight={"24px"}
          width={"100%"}
          maxWidth={"100px"}
        />
        <Skeleton height={"40px"} />
      </Flex>
      <Skeleton width="74px" height={"40px"} />
    </Stack>
  );
};

export default LoadingFilter;
