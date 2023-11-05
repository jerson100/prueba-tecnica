import {
  Alert,
  AlertIcon,
  AlertTitle,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { LoadingTable } from "@/components/common/loadings";
import useGuardStore from "@/stores/guards.store";
import { useTable, usePagination } from "react-table";
import TablePaginator from "./TablePaginator";
import { Guard } from "@/types/guard";
import GuardStatus from "./GuardStatus";
import { AnimatePresence, motion } from "framer-motion";
import {
  TableContainerVariants,
  TableRowVariants,
} from "../animation.variants";

const columns: any = [
  {
    Header: "Id",
    accessor: (data: Guard) => data.id_guardia,
  },
  {
    Header: "Agente",
    accessor: (data: Guard) => data.agente.nom_agente,
  },
  {
    Header: "Fecha Guardia",
    accessor: (data: Guard) => data.fecha_guardia,
  },
  {
    Header: "Fecha Registro",
    accessor: (data: Guard) => data.fecha_registro_guardia,
  },
  {
    Header: "Estado",
    accessor: (data: Guard) => data.estado_guardia,
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
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  if (loading) return <LoadingTable rows={4} columns={6} />;
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
      <AnimatePresence mode="popLayout">
        <Table
          {...getTableProps()}
          as={motion.table}
          variants={TableContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                <Th>Nº</Th>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr
                  {...row.getRowProps()}
                  as={motion.tr}
                  variants={TableRowVariants}
                  //   key={guard.id_guardia}
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
        </Table>
      </AnimatePresence>
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
