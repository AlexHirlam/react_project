import React, { Component } from "react";

const artistName = 'artist name';
const artistBio = 'artist bio';
const monthlyListerners = '57,300';
const followers = '59,393';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="left-container">
          <h2>{artistName} Bio</h2>
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
