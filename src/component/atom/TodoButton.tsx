import { Button } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  children: string;
  onClick: () => void;
};

export const TodoButton: VFC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <Button ml={1} size="xs" onClick={onClick}>
      {children}
    </Button>
  );
};
