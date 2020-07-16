import React from "react";
import "./styles/import.scss";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Travel from "./pages/Travel";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/travel" component={Travel} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
