import React from "react";
import Layout from "./Layout";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/curso_de_react.js/" component={Home} />
          <Route exact path="/curso_de_react.js/home/" component={Home} />
          <Route exact path="/curso_de_react.js/badge/" component={Badges} />
          <Route
            exact
            path="/curso_de_react.js/badges/new"
            component={BadgeNew}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
