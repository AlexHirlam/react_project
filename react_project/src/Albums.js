import React, { Component } from "react";
import pink_floyd from './album/pink_floyd.jpg';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();



class Albums extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
    spotifyApi.setAccessToken(token);
    this.state = {
    loggedIn: token ? true : false,
    artistBio: {artist: 'Artist'}
      }
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


  render() {
    return (
      <div>
        <h2>Albums</h2>
        <div class="albumFirstrow">

          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
        </div>
        <div class="albumSecondrow">
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
        </div>
        <div class="albumThirdrow">
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
          <p class="albumContainer"><img class="album" src={pink_floyd}/></p>
        </div>
      </div>
    );
  }
}


export default Albums;
