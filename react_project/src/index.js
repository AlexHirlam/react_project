
import ReactDOM from "react-dom";
import Main from "./Main";
import Image from "./Image";

import "./index.css";

import React, { Component } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();




class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
    spotifyApi.setAccessToken(token);
    this.state = {
    loggedIn: token ? true : false,
    nowPlaying: { name: 'Track', artist: 'Artist', albumArt: '' },
    }
      } else {
        window.location = "http://localhost:8888";
      }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            artist: response.item.artists[0].name,
            image: response.item.album.images[0].url
          }
        })
      })
  }
  render() {
    return (
      <div idName="App">
        <div class="nowPlaying"> Now Playing: {this.state.nowPlaying.name} By {this.state.nowPlaying.artist} </div>
        <div>
          <img src= {this.state.nowPlaying.image} style={{height: 300}}/>
        </div>
        { this.state.loggedIn &&
        this.getNowPlaying()
      }
      </div>
    );
  }
}


export default App;


ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);


ReactDOM.render(
  <App/>,
  document.getElementById("image")
);
