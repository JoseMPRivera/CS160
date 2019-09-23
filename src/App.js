import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomePage'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
