import React, { Component } from "react";

class InputBar extends Component {
  render() {
    return (
      <>
        <div className="flex align-middle justify-evenly m-10 p-2">
          <input
            type="text"
            className="w-8/12 border border-gray-400 rounded-sm p-2"
            placeholder="Enter a web page URL"
            onChange={(e) => {
              this.props.handleInput(e);
            }}
            defaultValue="https://www.google.com/"
          />
          <button
            className="w-1/12 p-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
              this.props.handleAnalyse();
            }}
          >
            Analyse
          </button>
        </div>
      </>
    );
  }
}

export default InputBar;
