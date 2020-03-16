import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Algorithm extends Component {
  styles = {
    width: 300
  };
  render() {
   
    return (
      <div className="container-fluid">
        <article className="row">
          <div className="col-4">
            <img src={this.props.algorithm.image} alt="single room" style={this.styles} />
            <Link to={`${this.props.algorithm.slug}`} className="btn btn-primary">
              {this.props.algorithm.name}
            </Link>
          </div>
        </article>
      </div>
    );
  }
}
