import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route id="aboutme" path="/aboutme" component={AboutMe} />
    <Route id="resume" path="/resume" component={Resume} />
    <Route id="projects" path="/projects" component={Projects} />
    <Route id="contact" path="/contact" component={Contact} />
  </Switch>
);

export default Main;
