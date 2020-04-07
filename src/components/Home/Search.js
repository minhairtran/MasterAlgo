import React, { Component } from "react";
import { AlgorithmContext } from "../../context/AlgorithmContext";
import AllAlgorithms from "../Algorithm/AllAlgorithms";

export default class Search extends Component {
  static contextType = AlgorithmContext;

  state = {
    search: ""
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 50) });
  }

  render() {
    const { algorithms } = this.context;
    let filteredAlgorithms = algorithms.filter(algorithm => {
      return algorithm.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <h4 className="display-4">
              Searching the algorithm here
            </h4>
          </div>
        </div>
        <div>
          <form className="form-inline justify-content-center" action="#">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Algorithm Search"
              onChange={this.updateSearch.bind(this)}
              value={this.state.search}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <AllAlgorithms filteredAlgorithms={filteredAlgorithms} />
        </div>
      </div>
    );
  }
}
