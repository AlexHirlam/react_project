import React, { Component } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const artistName = 'artist name';
const artistBio = 'artist bio';
const monthlyListerners = '57,300';
const followers = '59,393';


class Home extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
    spotifyApi.setAccessToken(token);
    this.state = {
    loggedIn: token ? true : false,
    artistBio: {artist: 'Loading...'}
      }
    } else {
      this.state = {
      artistBio: {artist: 'Loading...'}
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

getArtistBio(){
  spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        artistBio: {
          artist: response.item.artists[0].name,
        }
      })
    })
}

    render() {
      return (
        <div>
        {
          this.getArtistBio()
        }
          <div class="left-container">
            <h2> {this.state.artistBio.artist} Bio</h2>
            <p>{artistBio} - Ultimately comprisong members from Sweden, the U.S., and France, this retro-flavored blues-rock quartet were orinially founded as a trio in 2011 when the former
            rhythm section of Iowa act Radio Moscow -- Zack Anderson and Cory Berry -- recorded a demo with vocalist Elin Larsson in her Swedish hometown of Orebro.</p>
            <p>Monthy Listerners: {monthlyListerners}</p>
            <p>Followers: {followers}</p>
            </div>
          </div>
      );
    }
  }



export default Home;
