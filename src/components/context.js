import React, { Component, createContext } from 'react'

export const NodeContext = createContext();

class NodeContextProvider extends Component {

    constructor() {
        super();
        this.state = {
            startNodeRow: 10,
            startNodeCol: 15,
            finishNodeRow: 10,
            finishNodeCol: 55,
            grid: [],
            mouseIsPressed: false
        };
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

      componentDidMount() {
        const grid = getInitialGrid();
        this.setState({ grid });
      }

    render() {
        return (
            <NodeContext.Provider value={{...this.state}}>
                {this.props.children}
            </NodeContext.Provider>
        )
    }
}

export default NodeContextProvider;

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
      isStart: row === this.state.startNodeRow && col === this.state.startNodeCol,
      isFinish: row === this.state.finishNodeRow && col === this.state.finishNodeCol,
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
  
