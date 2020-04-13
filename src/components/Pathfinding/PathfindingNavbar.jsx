import React, { Component } from "react";
import { NodeContext } from "../../context/NodeContext";

class PathfindingNavbar extends Component {
  static contextType = NodeContext;
  render() {
    const {
      visualizeDijkstra,
      onClearPath,
      handleSpeedFast,
      handleSpeedSlow,
    } = this.context;
    return (
      <div class="container">
        <div class="d-flex flex-column justify-content-center">
          <a
            className="navbar-brand m-4 h1 text-center"
            href="http://localhost:3000/algorithm/pathfinding"
          >
            Pathfinding Visualiser
          </a>
          <div style={{ wordBreak: "break-all" }}>
            <button
              className="btn btn-outline-success m-3"
              onClick={() => visualizeDijkstra()}
            >
              <div style={{ wordBreak: "break-word" }}>
                Visualize Dijkstra's Algorithm
              </div>
            </button>

            <button
              type="button"
              className="btn btn-outline-danger m-3"
              onClick={() => onClearPath()}
            >
              Clear Path
            </button>
            <div class="dropdown col-m-auto">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dropdownMenuButton"
              >
                Speed
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
      </div>
    );
  }
}

export default PathfindingNavbar;
