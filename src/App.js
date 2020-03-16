import React, { Component } from "react";
import PathfindingVisualizer from "./pages/Pathfinding";
import Home from "./pages/Home";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

// // import for practicing react
// import Narbar from "./practice/components/Narbar";
// import Counters from "./practice/components/Counters";
// import ContextProvider from "./practice/components/Context";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/:slug" component={PathfindingVisualizer} />
          <Route component={Error} />
        </Switch>
      </>

      // <ContextProvider>
      //       <Narbar />
      //       <Counters />
      //     </ContextProvider>
    );
  }
}

export default App;
