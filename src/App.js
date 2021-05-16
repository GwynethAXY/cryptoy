// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Hello Gello please be on ghpages
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
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
  BrowserRouter as Router,
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
