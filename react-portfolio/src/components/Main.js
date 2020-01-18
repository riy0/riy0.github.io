import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Works from "./Works";
import Home from "./Home";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/works" component={Works} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
