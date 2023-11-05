import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { GuardStatus as GuardStatusType } from "@/types/guard";
import { GUARD_STATUS } from "@/config/guard.const";

interface GuardStatusProps {
  status?: GuardStatusType;
}

const GuardStatus: FC<GuardStatusProps> = ({ status }) => {
  return (
    <>
      {status === GUARD_STATUS.AVAILABLE && (
        <FaCheck color="green" title="Disponible" />
      )}
      {status === GUARD_STATUS.NOT_AVAILABLE && (
        <FaCheck color="red" title="No Disponible" />
      )}
    </>
  );
};

export default GuardStatus;
