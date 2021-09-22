import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const App = () => {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
