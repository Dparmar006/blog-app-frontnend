import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthorInfo from "./pages/AuthorInfo";
import Home from "./pages/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/author/:id" component={AuthorInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
