import React, { Component } from "react";

class Albums extends Component {
  render() {
    return (
      <div>
        <h2>Albums</h2>
        <p><img src="/album/pink-floyd-pf005jf.jpg" alt="album art" /></p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}

export default Albums;
