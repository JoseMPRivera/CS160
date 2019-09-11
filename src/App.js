import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomePage'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
    </Router>
  );
}

export default App;
