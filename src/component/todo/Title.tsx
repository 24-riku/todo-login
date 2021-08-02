import { Box, Center, Flex, Heading, Link } from "@chakra-ui/react";
import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { TodoButton } from "../atom/TodoButton";
import { userState } from "../store/userState";

export const Title = memo(() => {
  const [todos, setTodos] = useRecoilState(userState);
  const history = useHistory();
  const onClickLogout = () => {
    history.push("/");
    setTodos([]);
  };

  return (
    <>
      <Center m={3}>
        <Flex align="center">
          <Heading as="h1" mr={5}>
            Todos
          </Heading>
          <Link>user:1</Link>
        </Flex>
      </Center>
      <Box textAlign="right">
        <TodoButton onClick={onClickLogout}>login page</TodoButton>
      </Box>
    </>
  );
});
