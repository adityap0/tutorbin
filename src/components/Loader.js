import React, { Component } from "react";
import "./loader.css";

class Loader extends Component {
  render() {
    return (
      <>
        <h1>Running Performance Analysis</h1>
        <div className="progress">
          <div className="color"></div>
        </div>
      </>
    );
  }
}

export default Loader;
