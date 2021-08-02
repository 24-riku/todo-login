import { ChakraProvider } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { IncompleteTodos } from "./todo/IncompleteTodos";
import { CompletedTodos } from "./todo/CompletedTodos";
import { TodoText } from "./todo/TodoText";
import { Title } from "./todo/Title";
import { userState } from "./store/userState";
import { todoTextState } from "./store/todoTextState";
import { memo } from "react";

export const Todos = memo(() => {
  const [todos, setTodos] = useRecoilState(userState);

  const [todoText, setTodoText] = useRecoilState(todoTextState);

  const onClickComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onChangeText = (event: any) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      userId: 1,
      id: 1,
      title: todoText,
      completed: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickAgain = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    setTodos(newTodos);
  };

  return (
    <ChakraProvider>
      <Title />
      <TodoText
        todoText={todoText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        todos={todos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodos todos={todos} onClickAgain={onClickAgain} />
    </ChakraProvider>
  );
});
