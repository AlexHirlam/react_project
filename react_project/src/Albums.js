import React, { Component } from "react";
import pink_floyd from './album/pink_floyd.jpg';



class Albums extends Component {
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
