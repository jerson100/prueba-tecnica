import useAuthStore from "@/stores/auth.store";
import { Navigate, Outlet } from "react-router-dom";
import MainPageLayout from "../layouts/MainPageLayout/MainPageLayout";
import { Box } from "@chakra-ui/react";

const PrivatePageWrapper = () => {
  const authState = useAuthStore((state) => state);
  if (!authState.isAuthenticated()) return <Navigate to="/login" />;
  return (
    <MainPageLayout>
      <Box py={8} mt={"16"}>
        <Outlet />
      </Box>
    </MainPageLayout>
  );
};

export default PrivatePageWrapper;
