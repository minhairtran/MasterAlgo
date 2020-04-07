import React, { Component } from "react";
import NodeContextProvider from "../context/NodeContext";
import Nodes from "../components/Pathfinding/Nodes";
import PathfindingNavbar from "../components/Pathfinding/PathfindingNavbar";

class Pathfinding extends Component {
  render() {
    return (
      <NodeContextProvider>
        <div className="row">
          <div className="col-2">
            <PathfindingNavbar />
          </div>
          <div className="col-10">
            <Nodes />
          </div>
        </div>
      </NodeContextProvider>
    );
  }
}

export default Pathfinding;
