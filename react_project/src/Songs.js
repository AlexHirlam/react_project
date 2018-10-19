import React, { Component } from "react";

const songItem = 'Test Title'

class Songs extends Component {
  render() {
    return (
      <div>
        <h2>Song List</h2>
          <div class="firstrow">
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
          </div>
          <div class="secondrow">
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
            <p class="songtitle">{songItem}</p>
          </div>
      </div>
    );
  }
}

export default Songs;
