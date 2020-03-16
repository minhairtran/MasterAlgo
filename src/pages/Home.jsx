import React, { Component } from "react";
import AllAlgorithm from "../components/AllAlgorithms";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <form className="form-inline justify-content-center" action="#">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-info" type="submit">
            Algorithm Search
          </button>
        </form>
        <AllAlgorithm/>
      </div>
    );
  }
}

export default Home;
