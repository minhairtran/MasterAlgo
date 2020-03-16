import React, { Component } from 'react'
import { createContext } from 'react'
import pathfindingImage from "../images/pathfinding.png";

export const AlgorithmContext = createContext();

class AlgorithmContextProvider extends Component {
    state={
        algorithms:[
            {
                id: 1,
                name: "Pathfinding",
                image: pathfindingImage,
                slug: "pathfinding"
            }
        ],
    };

    render() {
        return (
            <AlgorithmContext.Provider value={{...this.state}}>
                {this.props.children}
            </AlgorithmContext.Provider>
        )
    }
}

export default AlgorithmContextProvider;