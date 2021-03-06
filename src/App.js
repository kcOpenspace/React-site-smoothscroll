import React from 'react';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/SigninPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={Signin} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
