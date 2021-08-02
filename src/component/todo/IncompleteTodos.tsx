import { Box, Center, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { TodoButton } from "../atom/TodoButton";

type Todo = {
  userId: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Array<Todo>;
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos: VFC<Props> = memo((props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <Box
      as="div"
      bg="red.300"
      minHeight="200px"
      p="8px"
      m="8px"
      borderRadius={10}
    >
      <ul>
        <Center pb={2} fontSize="lg" fontWeight="bold">
          TodoList
        </Center>
        {todos.map((todo, index) => {
          if (!todo.completed) {
            return (
              <Flex pl={10} mb={1}>
                <li key={index}>{todo.title}</li>
                <TodoButton onClick={() => onClickComplete(index)}>
                  完了
                </TodoButton>
                <TodoButton onClick={() => onClickDelete(index)}>
                  削除
                </TodoButton>
              </Flex>
            );
          }
        })}
      </ul>
    </Box>
  );
});
