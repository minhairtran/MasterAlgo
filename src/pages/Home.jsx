import React, { Component } from "react";
import Search from "../components/Home/Search";
import Footer from "../components/Footer";
import Background from "../components/Home/Background";
import About from "../components/Home/About";
import OurTeam from "../components/Home/OurTeam";
import ConnectUs from "../components/Home/ConnectUs";

class Home extends Component {
  render() {
    return (
      <>
        <Background />
        <div className="container-fluid">
          <div className="row jumbotron" style={{padding:0}}>
            <div className="col-sm-12 col-xs-12 col-lg-7 col-xl-9">
              <p className="lead">
                This application built for the purpose of helping students in
                imagining and coding algorithm.
              </p>
            </div>
          </div>
        </div>
        <Search />
        <hr />
        <div className="container">
          <div className="row welcome text-center padding">
            <div className="col-12">
              <h1 className="display-4">Programming language supported</h1>
            </div>
          </div>
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="fab fa-python"></i>
              <h3>Python</h3>
              <p>
                Python is a programming language that lets you work more quickly
                and integrate your systems more effectively.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="fab fa-cuttlefish"></i>
              <h3>C</h3>
              <p>
                C is a general-purpose, procedural computer programming language
                supporting structured programming, lexical variable scope, and
                recursion, while a static type system prevents unintended
                operations
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <i className="fab fa-java"></i>
              <h3>Java</h3>
              <p>
                Java is at the heart of our digital lifestyle. It's the platform
                for launching careers, exploring human-to-digital interfaces,
                architecting the world's best applications, and unlocking
                innovation everywhere—from garages to global organizations.
              </p>
            </div>
          </div>
          <hr />
        </div>

        <About />
        <OurTeam />
        <ConnectUs />
      </>
    );
  }
}

export default Home;
