import React, { Component } from "react";
import Node from "./Node";
import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";

import "../App.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      speed: 1,
      speedIsOpen: false,
      isOpen: false,
      grid: [],
      mouseIsPressed: false
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleToggleSpeed = () => {
    this.setState({ speedIsOpen: !this.state.speedIsOpen });
  };

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 100 * this.state.speed * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 100 * this.state.speed * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  handleSpeed = () => {
    let speed = this.state.speed * 5;
    this.setState({ speed });
  };

  slowSpeed = () => {
    let speed = this.state.speed * 10;
    this.setState({ speed });
  };

  normalSpeed = () => {
    let speed = this.state.speed * 1;
    this.setState({ speed });
  };

  fastSpeed = () => {
    let speed = this.state.speed * 0.1;
    this.setState({ speed });
  };



  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <>
        <div className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <h3>Pathfinding Visualiser</h3>
              <button
                type="button"
                className="nav-btn btn-primary"
                onClick={this.handleToggle}
              >
                Options
              </button>
            </div>
            <ul
              className={
                this.state.isOpen ? "nav-buttons show-nav" : "nav-buttons"
              }
            >
              <li>
                <button
                  className="btn-primary"
                  onClick={() => this.visualizeDijkstra()}
                >
                  Visualize Dijkstra's Algorithm
                </button>
              </li>
              <li>
                <button
                  className="btn-primary"
                  onClick={this.handleToggleSpeed}
                >
                  Speed
                </button>
                <ul
                  className={
                    this.state.speedIsOpen
                      ? "nav-btn nav-buttons show-nav" : "nav-btn"
                  }
                >
                  <button type="button" className="btn-primary" onClick={this.slowSpeed}>Slow</button>
                  <button type="button" className="btn-primary" onClick={this.normalSpeed}>Normal</button>
                  <button type="button" className="btn-primary" onClick={this.fastSpeed}>Fast</button>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        );
        <div className="grid">
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
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 66; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};
const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
