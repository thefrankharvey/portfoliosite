import React, { Component } from 'react';
import './App.css';
import { Route, Link, NavLink, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">


        <Nav />

        <div className='triangle'>
          <img id='triangle' src='https://drive.google.com/uc?id=1G6ZQbB7OL-0eesz7sXKE5g494MHyaIit'></img>
        </div>

        <div className='left-bar'>
          <img id='left-bar' src='https://drive.google.com/uc?id=1OSyzp0lDHIGLVBxBjyVyr_uTset1unnM'></img>
        </div>

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
