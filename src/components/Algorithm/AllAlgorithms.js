import React, { Component } from "react";
import Algorithm from "./Algorithm";
export default class AllAlgorithms extends Component {

  render() {
    return (
      <section className="p-5">
        {this.props.filteredAlgorithms.map(algorithm => {
          return <Algorithm key={algorithm.id} algorithm={algorithm} />;
        })}
      </section>
    );
  }
}
