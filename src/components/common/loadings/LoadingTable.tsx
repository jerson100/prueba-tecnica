import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface LoadingTableProps {
  rows?: number;
  columns?: number;
  heightRow?: string;
  heightColumn?: string;
}

const LoadingTable: FC<LoadingTableProps> = ({
  rows = 6,
  columns = 5,
  heightRow = "50px",
  heightColumn = "42px",
}) => {
  return (
    <Flex flexDirection={"column"} rowGap={4}>
      {columns > 0 && (
        <Stack spacing={4} direction={"row"}>
          {Array(columns)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={heightColumn} flexGrow={1} />
            ))}
        </Stack>
      )}
      <Stack spacing={4}>
        {Array(rows)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} height={heightRow} />
          ))}
      </Stack>
    </Flex>
  );
};

export default LoadingTable;
