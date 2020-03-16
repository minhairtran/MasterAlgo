import React from "react";
import Counter from "./Counter";
import { Context } from "./Context";
import { Component } from "react";

class Counters extends Component {
  static contextType = Context;
  render() {
    const { counters, onIncrement, onReset, onDelete } = this.context;
    return (
      <div className="container-fluid">
        <button type="button" className="btn btn-warning m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
