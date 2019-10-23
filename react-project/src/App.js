import React, {Component} from 'react';
import logo from './logo.svg';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomePage'
import Login from './components/Login'
import signUp from './components/signUp'
import Rating from './components/Rating'
import Profile from './components/Profile'
import './App.css';



class App extends Component {
  state = {
      data: null
    };

componentDidMount() {
  // Call our fetch function below once the component mounts
this.callBackendAPI()
  .then(res => this.setState({ data: res.express }))
  .catch(err => console.log(err));
}
// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
const response = await fetch('/express_backend');
const body = await response.json();

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};
// function App() {
//   return (
//     <Router>
//       <Route path="/" exact component={Home} />
//       <Route path="/Login" component={Login} />
//       <Route path="/signUp" component={signUp} />
//       <Route path="/Profile" component={Profile} />
//     </Router>
//   );
// }


render() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/signUp" component={signUp} />
      <Route path="/Rating" component={Rating} />
      <Route path="/Profile" component={Profile} />
      <p className="App-intro">{this.state.data}</p>
    </Router>
    
  );
}
}

export default App;
