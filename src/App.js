import React, { Component } from 'react';
import './App.css';
import { Route, Link, NavLink, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path='/bio' component={ Bio }></Route>
          <Route path='/contact' component={ Contact }></Route>
          <Route path='/portfolio' component={ Portfolio }></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
