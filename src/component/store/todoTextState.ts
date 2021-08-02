import { atom } from "recoil";

export const todoTextState = atom<string>({
  key: "todoTextState",
  default: ""
});
