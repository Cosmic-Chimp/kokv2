import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
      </ul>
    );
  }
}