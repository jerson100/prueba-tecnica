import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { FC } from "react";
import { motion } from "framer-motion";
import { YVariants } from "../animation.variants";

interface TablePaginatorProps {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  previousPage: () => void;
  canPreviousPage: boolean;
  pageIndex: number;
  pageOptions: number[];
  pageCount: number;
  nextPage: () => void;
  canNextPage: boolean;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const TablePaginator: FC<TablePaginatorProps> = ({
  gotoPage,
  previousPage,
  canPreviousPage,
  pageIndex,
  pageOptions,
  pageCount,
  nextPage,
  canNextPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <Flex justifyContent="space-between" m={4} alignItems="center">
      <Flex as={motion.div} variants={YVariants} custom={-1}>
        <Tooltip label="Primera Página">
          <IconButton
            onClick={() => gotoPage(0)}
            aria-label="Primera Página"
            isDisabled={!canPreviousPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Página anterior">
          <IconButton
            aria-label="Página anterior"
            onClick={previousPage}
            isDisabled={!canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Flex as={motion.div} variants={YVariants} custom={1} alignItems="center">
        <Text flexShrink="0" mr={8}>
          Página{" "}
          <Text fontWeight="bold" as="span">
            {pageIndex + 1}
          </Text>{" "}
          de{" "}
          <Text fontWeight="bold" as="span">
            {pageOptions.length}
          </Text>
        </Text>
        <Text flexShrink="0">Ir a:</Text>{" "}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={pageOptions.length}
          onChange={(value) => {
            const page = value ? parseInt(value) - 1 : 0;
            gotoPage(page);
          }}
          defaultValue={pageIndex + 1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[9, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex as={motion.div} variants={YVariants} custom={-1}>
        <Tooltip label="Siguiente Página">
          <IconButton
            aria-label="Siguiente Página"
            onClick={nextPage}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Última Página">
          <IconButton
            aria-label="Última Página"
            onClick={() => gotoPage(pageCount - 1)}
            isDisabled={!canNextPage}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default TablePaginator;
