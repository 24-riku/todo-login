import { atom } from "recoil";

import { TodoType } from "../types/todo";

export const userState = atom<Array<TodoType>>({
  key: "userState",
  default: []
});
