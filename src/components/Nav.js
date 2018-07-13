import React, { Component } from 'react';

import { Route, Link, NavLink, Switch, withRouter} from 'react-router-dom'


class Nav extends Component {
  render() {
    return (
      <div className="Nav">



        <div className='top-bar'>
          <img id='top-bar' src='https://drive.google.com/uc?id=1v-xvhl2l-RA3p69Ph5RESMbJcf10cu2p'></img>
        </div>

        <p id="Bio">Bio</p>
        <p id="Contact">Contact</p>
        <p id="Portfolio">Porfolio</p>


      </div>
    );
  }
}

export default Nav;
