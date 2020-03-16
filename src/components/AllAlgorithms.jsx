import React, { Component } from "react";
import { AlgorithmContext } from "../context/AlgorithmContext";
import Algorithm from "./Algorithm";
export default class AllAlgorithms extends Component {
  static contextType = AlgorithmContext;
  render() {
    const { algorithms } = this.context;
    return (
      <section className="p-5">
        {algorithms.map(algorithm => {
          return <Algorithm key={algorithm.id} algorithm={algorithm} />;
        })}
      </section>
    );
  }
}
