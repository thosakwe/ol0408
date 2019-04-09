import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Abilities from "./abilities";
import GlobalCafe from "./global_cafe";
import MLS from "./mls";
import Responsibility from "./responsibility";
import Splash from "./splash";
import WhatTheX from "./what_the_x";
import Wheel from "./wheel";

export default () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Splash} />
      <Route path="/abilities" exact component={Abilities} />
      <Route path="/global_cafe" exact component={GlobalCafe} />
      <Route path="/mls" exact component={MLS} />
      <Route path="/responsibility" exact component={Responsibility} />
      <Route path="/what_the_x" exact component={WhatTheX} />
      <Route path="/wheel" exact component={Wheel} />
    </HashRouter>
  );
};
