import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TableContainerVariants,
  TableRowVariants,
} from "../animation.variants";
import { LoadingTable } from "@/components/common/loadings";
import useGuardStore from "@/stores/guards.store";
import GuardStatus from "./GuardStatus";

const GuardsTable = () => {
  const guards = useGuardStore((state) => state.guards);
  const loading = useGuardStore((state) => state.loading);
  if (loading) return <LoadingTable rows={4} columns={6} />;
  return (
    <AnimatePresence mode="popLayout">
      <TableContainer
        as={motion.div}
        variants={TableContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Table variant="striped">
          <TableCaption>List of Guards</TableCaption>
          <Thead>
            <Tr>
              <Th>Nº</Th>
              <Th>Id</Th>
              <Th>Agente</Th>
              <Th>Fecha</Th>
              <Th>Fecha de Registro</Th>
              <Th>Estado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guards.map((guard, index) => (
              <Tr
                as={motion.tr}
                variants={TableRowVariants}
                key={guard.id_guardia}
              >
                <Td>{index + 1}</Td>
                <Td>{guard.id_guardia}</Td>
                <Td>{guard.agente.nom_agente}</Td>
                <Td>{guard.fecha_guardia}</Td>
                <Td>{guard.fecha_registro_guardia}</Td>
                <Td>
                  <GuardStatus status={guard.estado_guardia} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AnimatePresence>
  );
};

export default GuardsTable;
