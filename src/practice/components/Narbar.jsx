import React, { Component } from "react";
import { Context } from "./Context";
import "bootstrap/dist/js/bootstrap.bundle";

class NarBar extends Component {
  static contextType = Context;

  render() {
    const { totalCounterChosen } = this.context;

    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <h1>Narbar</h1>
        <span className="badge badge-primary m-3">{totalCounterChosen}</span>
        <div class="btn-group">
          <button type="button" class="btn btn-danger">
            Action
          </button>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NarBar;
