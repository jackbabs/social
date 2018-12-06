import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import Home from './home/components/layout/Home';
import Landing from './course/components/layout/Landing';
import Login from './course/components/auth/Login';
import Register from './course/components/auth/Register';
import Welcome from './course/components/layout/Welcome';
import Dashboard from './course/components/layout/Dashboard';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current profile

    // Redirect to login
    window.location.href = '/conversationdecoded/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/conversationdecoded" component={Landing} />
            <Route exact path="/conversationdecoded/login" component={Login} />
            <Route
              exact
              path="/conversationdecoded/register"
              component={Register}
            />
            <Route
              exact
              path="/conversationdecoded/welcome"
              component={Welcome}
            />
            <Route
              exact
              path="/conversationdecoded/dashboard"
              component={Dashboard}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
