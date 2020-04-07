import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes/>
        <Footer/>
      </>
    );
  }
}

export default App;
