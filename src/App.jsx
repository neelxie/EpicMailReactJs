import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import HeaderSection from './commons/components/HeaderSection';
import Landing from '../src/commons/components/Landing';

export default function App() {
  return (
    <Router>
      
      <ToastContainer />
      <Route path="/" exact component={Landing} />
      {/* <Route path="/login" exact component={LoginContainer} />
      <Switch>
        <Route path="/about" component={Landing} />
      </Switch> */}
      {/* <h1>Olwalwwero</h1> */}
    </Router>
  );
}
