import { Helmet } from "react-helmet-async";
import { LoadingTable } from "@/components/common/loadings";

const LoadingGuardPage = () => {
  return (
    <>
      <Helmet>
        <title>Loading...| GuardsApp</title>
        <meta name="description" content="List of guards" />
        <meta name="author" content="Jerson Ramírez Ortiz" />
      </Helmet>
      <LoadingTable />
    </>
  );
};

export default LoadingGuardPage;
