import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import Songs from "./Songs";
import pink_floyd from './album/pink_floyd.jpg';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Music Master</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/songs">Songs</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/songs" component={Songs}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}


export default Main;
