import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './home/components/layout/Home';
import Landing from './course/components/layout/Landing';
import Login from './course/components/auth/Login';
import Register from './course/components/auth/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/conversationdecoded" component={Landing} />
            <Route exact path="/conversationdecoded/login" component={Login} />
            <Route exact path="/conversationdecoded/register" component={Register} />
            <Route exact path="/conversationdecoded/welcome" component={Welcome}/>
            <Route exact path="/conversationdecoded/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
