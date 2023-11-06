import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  LoadingTable,
  LoadingTablePagination,
} from "@/components/common/loadings";
import useGuardStore from "@/stores/guards.store";
import { useTable, usePagination, Column } from "react-table";
import TablePaginator from "./TablePaginator";
import { Guard } from "@/types/guard";
import GuardStatus from "../../../../components/common/GuardStatus";
import { AnimatePresence, motion } from "framer-motion";
import {
  TableContainerVariants,
  TableRowVariants,
  YVariants,
} from "../animation.variants";

const columns: Column<Guard>[] = [
  {
    Header: "Id",
    accessor: (data) => data.id_guardia,
  },
  {
    Header: "Agente",
    accessor: (data) => data.agente.nom_agente,
  },
  {
    Header: "Fecha Guardia",
    accessor: (data) => data.fecha_guardia,
  },
  {
    Header: "Fecha Registro",
    accessor: (data) => data.fecha_registro_guardia,
  },
  {
    Header: "Estado",
    accessor: (data) => data.estado_guardia,
    Cell: (col: any) => {
      return <GuardStatus status={col.row.original.estado_guardia} />;
    },
  },
];

const GuardsTable = () => {
  const guards = useGuardStore((state) => state.guards);
  const loading = useGuardStore((state) => state.loading);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: columns,
      data: guards,
      initialState: { pageIndex: 0, pageSize: 9 },
    },
    // useSortBy,
    usePagination
  );
  if (loading)
    return (
      <>
        <LoadingTable rows={8} />
        <LoadingTablePagination />
      </>
    );
  if (guards.length === 0) {
    return (
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No se encontraron guardias
        </AlertTitle>
      </Alert>
    );
  }
  return (
    <>
      <Box
        overflowX={{
          base: "auto",
          md: "hidden",
        }}
        overflowY={"hidden"}
      >
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr
                as={motion.tr}
                variants={YVariants}
                custom={-1}
                {...headerGroup.getHeaderGroupProps()}
              >
                <Th>Nº</Th>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {/* <Th {...column.getHeaderProps(column.getSortByToggleProps())}> */}
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <AnimatePresence mode="wait">
            <Tbody
              {...getTableBodyProps()}
              as={motion.tbody}
              variants={TableContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={pageIndex + pageSize}
            >
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr
                    {...row.getRowProps()}
                    as={motion.tr}
                    variants={TableRowVariants}
                  >
                    <Td>{i + 1}</Td>
                    {row.cells.map((cell) => {
                      return (
                        <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </AnimatePresence>
        </Table>
      </Box>
      <TablePaginator
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </>
  );
};

export default GuardsTable;
