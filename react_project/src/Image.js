import React, { Component } from "react";
import pink_floyd_profile from './profile/pink_floyd_profile.jpeg';

class Image extends Component {
  render() {
    return (

        <div>
          <img class="album" src={pink_floyd_profile}/>
        </div>

    );
  }
}

export default Image;
