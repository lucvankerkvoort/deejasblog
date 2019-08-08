import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../General/NavBar/NavBar";
import Homebody from "./HomeBody/HomeBody";
import Settings from "./SettingsBody/SettingsBody";
class Localhome extends React.Component {
  state = {
    user: "local"
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Navbar />
            <Route
              exact
              path="/home"
              render={props => <Homebody {...props} user={this.state.user} />}
            />
            <Route
              exact
              path="/settings"
              render={props => <Settings {...props} user={this.state.user} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Localhome;
