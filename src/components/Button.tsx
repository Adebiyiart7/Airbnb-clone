import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | string;
}

const AppButton = React.memo(({ children }: Props) => {
  return (
    <Button size="lg" color="white" bgColor="primary" rounded={10} width="100%">
      {children}
    </Button>
  );
});

export default AppButton;
