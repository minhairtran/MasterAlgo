import React, { Component } from "react";
import Node from "./Node";
import "../../App.css";
import { NodeContext } from "../../context/NodeContext";

export default class PathfindingVisualizer extends Component {
  static contextType = NodeContext;
  render() {
    const {
      mouseIsPressed,
      grid,
      handleMouseDown,
      handleMouseEnter,
      handleMouseUp,
    } = this.context;

    return (
      <div className="container-fluid">
        <div className="jumbotron">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                      onMouseUp={() => handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
