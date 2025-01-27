import React from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";

import Business from "./components/pages/Business";
import ID from "./components/pages/ID";
import Education from "./components/pages/Education";
import Promotional from "./components/pages/Promotional";
import Publications from "./components/pages/Publications";
import Campaign from "./components/pages/Campaign";
import ProductPage from "./components/pages/PoductPage";

import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router basename="/sample">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/PressServices" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={ProductPage} />
          <Route path="/ID" component={ID} />
          <Route path="/Business" component={Business} />
          <Route path="/About" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Education" component={Education} />
          <Route path="/Promotional" component={Promotional} />
          <Route path="/Publications" component={Publications} />
          <Route path="/Campaign" component={Campaign} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
