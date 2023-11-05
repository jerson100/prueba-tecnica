import { useState, FC } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FieldProps } from "formik";

interface InputPasswordProps extends FieldProps {}

const InputPassword: FC<InputPasswordProps> = ({ field, form, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputGroup>
      <Input {...props} {...field} type={showPassword ? "text" : "password"} />
      <InputRightElement h={"full"}>
        <Button
          variant={"ghost"}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPassword;
