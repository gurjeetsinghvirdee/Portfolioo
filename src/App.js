import React from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from './Components/About';
import Contacts from './Components/Contacts';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Works from "./Components/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/contacts" >
            <Header />
            <Contacts />
          </Route>
          <Route path="/works">
            <Header />
            <Works />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
