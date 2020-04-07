import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import { NodeContext } from "../../context/NodeContext";

class PathfindingNavbar extends Component {
  static contextType = NodeContext;
  render() {
    const {
      visualizeDijkstra,
      onClearPath,
      handleSpeedFast,
      handleSpeedSlow
    } = this.context;
    return (
      <div class="container">
        <div class="d-flex flex-column justify-content-center">
          <a className="navbar-brand m-4 h1 text-center" href="http://localhost:3000/algorithm/pathfinding">Pathfinding Visualiser</a>
          <button
            className="btn btn-outline-success m-3"
            onClick={() => visualizeDijkstra()}
          >
            Visualize Dijkstra's Algorithm
          </button>

          <button
            type="button"
            className="btn btn-outline-danger m-3"
            onClick={() => onClearPath()}
          >
            Clear Path
          </button>
          <div class="btn-group col-md-auto">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Speed
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                type="button"
                onClick={handleSpeedSlow}
              >
                Slow
              </a>
              <a
                className="dropdown-item"
                type="button"
                onClick={handleSpeedFast}
              >
                Fast
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PathfindingNavbar;
