import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface ErrorGuardPageProps {
  msg: string;
  title?: string;
}

const ErrorGuardsPage: FC<ErrorGuardPageProps> = ({ msg, title }) => {
  return (
    <>
      <Helmet>
        <title>Guards | GuardsApp</title>
      </Helmet>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        {title && (
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {title}
          </AlertTitle>
        )}
        <AlertDescription maxWidth="sm">{msg}</AlertDescription>
      </Alert>
    </>
  );
};

export default ErrorGuardsPage;
