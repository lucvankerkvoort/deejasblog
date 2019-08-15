import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import LocalsHomePage from "./components/Locals/LocalsHomePage/LocalsHomePage";
import TravelerHome from "./components/Travelers/TravelerHome/TravelerHome";

class App extends React.Component {
  state = {
    user: "",
    currentUser: []
  };

  handleChange = input => {
    console.log("input inside App.js", input);
    this.setState({ user: input });
  };

  handleUser = input => {
    this.setState({ currentUser: input });
  };

  render() {
    console.log(this.state.currentUser);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <LandingPage handleChange={this.handleChange} />}
            />
            <Route
              path="/login"
              render={props => (
                <LoginPage
                  {...props}
                  user={this.state.user}
                  currentUser={this.handleUser}
                />
              )}
            />
            <Route
              path="/localhome"
              render={props => {
                console.log(props);
                return (
                  <LocalsHomePage
                    {...props}
                    currentUser={this.state.currentUser}
                    user={this.state.user}
                  />
                );
              }}
            />
            />
            <Route
              path="/travelerhome"
              component={() => <TravelerHome user={this.state.user} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
