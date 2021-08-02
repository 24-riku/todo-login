import { atom } from "recoil";

export const loginUserid = atom<string>({
  key: "loginUserid",
  default: ""
});
