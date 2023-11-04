import { Skeleton, Stack } from "@chakra-ui/react";

const LoadingTable = () => {
  return (
    <Stack spacing={4}>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default LoadingTable;
