import React, {useState} from "react";
import './App.css';
import PThreeClass from "./components/PThreeClass"
import PTwo from "./components/PTwo"
import POne from "./components/POne"
import Home from "./components/Home"
import Infinity from "./components/Infinity"
import IntroSKC from "./components/IntroSKC"
import CaesarBsics from "./components/CaesarBasics"
import BeginMath from "./components/BeginMath";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/pone" component={POne}/>
          <Route path="/ptwo" component={PTwo}/>
          <Route path="/cb" component={CaesarBsics}/>
          <Route path="/pthree" component={PThreeClass}/>
          <Route path="/infinity" component={Infinity}/>
          <Route path="/skc" component={IntroSKC}/>
          <Route path="/mod" component={BeginMath}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
