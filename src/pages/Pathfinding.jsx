import React, { Component } from "react";
import NodeContextProvider from "../context/NodeContext";
import Nodes from "../components/Pathfinding/Nodes";
import PathfindingNavbar from "../components/Pathfinding/PathfindingNavbar";

class Pathfinding extends Component {
  render() {
    return (
      <NodeContextProvider>
        <PathfindingNavbar />
        <Nodes />
      </NodeContextProvider>
    );
  }
}

export default Pathfinding;
