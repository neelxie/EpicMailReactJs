import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import HeaderSection from './commons/components/HeaderSection';
import Landing from '../src/commons/components/Landing';
import Login from './commons/components/Login';
import SignUp from './commons/components/Signup';

export default function App() {
  return (
    <Router>
      
      <ToastContainer />
      <Route path="/" exact component={Landing} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}
