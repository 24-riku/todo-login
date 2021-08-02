import { Box, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { TodoButton } from "../atom/TodoButton";

type Props = {
  todoText: string;
  onChangeText: (event: any) => void;
  onClickAdd: () => void;
};

export const TodoText: VFC<Props> = memo((props) => {
  const { todoText, onChangeText, onClickAdd } = props;

  return (
    <Box textAlign="center">
      <Input
        placeholder="todo"
        w="30%"
        size="sm"
        value={todoText}
        onChange={onChangeText}
      />
      <TodoButton onClick={onClickAdd}>追加</TodoButton>
    </Box>
  );
});
