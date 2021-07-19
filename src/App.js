import React from "react";
import Head from "./component/Head";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./component/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Head} />
        <Route exact path="/Product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
