import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Image from "./Image";

import "./index.css";

constructor() {
  super();
  this.state = {
    spotify: []
  };
}

componentDidMount() {
  fetch('https://developer.spotify.com/dashboard/applications/d84646025f5d459ca247efe021399646')
    .then(response => response.json())
    .then(responseData => {
      this.setState({spotify: responseData});
    })
}

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);

ReactDOM.render(
  <Image/>,
  document.getElementById("image")
);
