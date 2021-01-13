import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Wizard from "./components/Wizard";
import Contacts from "./components/typo/Contacts";
import Main from "./components/Main";
import aboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollTop";
import Offerings from "./components/Detail.js/offering";
import Aboutwork from "./components/Detail.js/aproach";
import Baseline from "./components/Detail.js/baseline";

// component routes functionality
 export default props => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/aboutus" component={aboutUs} />
        <Route exact path="/case-Studies" component={Wizard} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/offerings" component={Offerings} />
        <Route exact path="/aproch-to-work" component={Aboutwork} />
        <Route exact path="/baseline-characteristics" component={Baseline} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
