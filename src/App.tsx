import { RecoilRoot } from "recoil";
import { Router } from "./component/router/Router";
import "./styles.css";

export const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};
