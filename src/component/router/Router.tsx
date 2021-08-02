import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Todos } from "../Todos";
import { Login } from "../Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/todos">
          <Todos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
