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
import GuardStatus from "./GuardStatus";
import useGuardStore from "@/stores/guards.store";

const TableContent = () => {
  const guards = useGuardStore((state) => state.guards);
  console.log(guards);
  return (
    <TableContainer>
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
            <Tr key={guard.id_guardia}>
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
  );
};

export default TableContent;
