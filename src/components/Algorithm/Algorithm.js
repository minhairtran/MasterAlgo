import React, { Component } from "react";
import "../../style.css";

export default class Algorithm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <img className="card-img-top" src={this.props.algorithm.image} />
            <h4 className="card-title">{this.props.algorithm.name}</h4>
            <p className="card-text">
              Pathfinding algorithms are usually an attempt to solve the
              shortest path problem in graph theory
            </p>
            <a href={`${this.props.algorithm.slug}`}>
              <button className="btn btn-outline-primary">
                {this.props.algorithm.name}
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
