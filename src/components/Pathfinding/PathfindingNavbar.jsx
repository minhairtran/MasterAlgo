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
      <div class="container-fluid">
        <div class="row">
          <nav className="navbar navbar-light navbar-expand-sm bg-light col">
            <span className="navbar-brand mb-0 h1">
              Pathfinding Visualiser
            </span>
            <div className="col">
              <button
                className="btn btn-outline-success col-md-auto m-3"
                onClick={() => visualizeDijkstra()}
              >
                Visualize Dijkstra's Algorithm
              </button>

              <button
                className="btn btn-outline-danger col-md-auto m-3"
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
                    href="#"
                    type="button"
                    onClick={handleSpeedSlow}
                  >
                    Slow
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    type="button"
                    onClick={handleSpeedFast}
                  >
                    Fast
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default PathfindingNavbar;
