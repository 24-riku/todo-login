import { Center, ChakraProvider, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { TodoButton } from "./atom/TodoButton";
import { userState } from "./store/userState";

export const Login = memo(() => {
  const [todos, setTodos] = useRecoilState(userState);
  const [loginText, SetLoginText] = useState("");

  const onChangeLoginText = (e: any) => {
    SetLoginText(e.target.value);
  };

  const history = useHistory();

  const onClickLogin = () => {
    if (loginText === "") {
      alert("Please enter your userid");
      return;
    }
    history.push("/todos");

    const userId = loginText;
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((res) => setTodos(res.data))
      .catch(() => alert("error"));
  };

  return (
    <ChakraProvider>
      <Center pb={2} fontSize="lg" fontWeight="bold">
        <Heading as="h1" mb={10}>
          Login Page
        </Heading>
      </Center>
      <Center>
        <Input
          placeholder="user id"
          w="30%"
          size="sm"
          value={loginText}
          onChange={onChangeLoginText}
        />

        <TodoButton onClick={onClickLogin}>Login</TodoButton>
      </Center>
    </ChakraProvider>
  );
});
