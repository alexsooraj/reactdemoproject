import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    );
  }
}

export default Like;
