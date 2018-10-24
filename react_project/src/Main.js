import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import Songs from "./Songs";



class Main extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="title">Music Master</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/songs">Songs</NavLink></li>
            <a  class="loginButton" href='http://localhost:8888' > Login to Spotify </a>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/songs" component={Songs}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default Main;
