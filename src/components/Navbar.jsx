import React, { Component } from "react";
import Login from "./User/Login";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="http://localhost:3000/">
            Home
          </a>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Login
            </button>
            <Login />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
