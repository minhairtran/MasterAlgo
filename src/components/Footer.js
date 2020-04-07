import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
      <div className="row text-center padding">
        <div className="col-md-4">
        <hr className="light" />
        <h4>Our Contact</h4>
          <hr className="light" />
          <p>+84-342-957-898</p>
          <p>minhairtran@gmail.com</p>
          <p>Hanoi, Vietnam</p>
        </div>
        <div className="col-md-4">
          <hr className="light" />
          <h4>Our time</h4>
          <hr className="light" />
          <p>From Monday to Friday</p>
          <p>From 8a.m to 5p.m, Vietnam time UTC+07:00 </p>
        </div>
        <div className="col-md-4">
          <hr className="light" />
          <h4>Our service</h4>
          <hr className="light" />
          <p>Answer questions about this system</p>
          <p>Answer questions about algorithms</p>
          <p>Training programming</p>
        </div>
      </div>
      <div className="col-12 text-center">
          <hr className="light-bottom"/>
          <h4>&copy; MasterAlgo.com</h4>
        </div>
    </footer>
    );
  }
}
