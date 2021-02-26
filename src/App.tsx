import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
// import Footer from './components/Footer';
import CardContainer from './components/CardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RandomFact from './components/RandomFact';

function App() {
  return (
    <div className="App" style={{  }}>
      <Header />
      
      <Router>
        <Switch>
          <Route path="/" component={CardContainer} exact />
          <Route path="/random-fact" component={RandomFact} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
