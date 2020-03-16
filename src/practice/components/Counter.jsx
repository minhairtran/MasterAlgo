import React, { Component } from "react";

const Counter = props => {
  const { value, id } = props.counter;
  return (
    <div>
      <span className="badge badge-pill badge-info m-2" >{value}</span>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-outline-danger m-2"
        onClick={() => props.onDelete(props.counter)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
