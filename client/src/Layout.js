import React, { Component } from "react";
import Root from './Router'
import "./App.css";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <p>title</p>
        <Root />
      </div>
    );
  }
}

export default Layout;
