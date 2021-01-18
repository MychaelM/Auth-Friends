import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
 
function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendsList">Friends</Link>
        </li>
      </ul>
      <h1>Auth-Friends</h1>
      <Switch>
        <PrivateRoute exact path="/friendsList" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
