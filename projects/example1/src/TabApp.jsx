import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

class TabApp extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <h1>Hey welcome home!</h1>
        <div className="links">
          <Link to={`${path}`} className="link">
            Profile
          </Link>
          <Link to={`${path}/comments`} className="link">
            Comments
          </Link>
          <Link to={`${path}/contact`} className="link">
            Contact
          </Link>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={() => <div>profile....</div>}
            />
            <Route
              path={`${path}/comments`}
              render={() => <div>comments....</div>}
            />
            <Route
              path={`${path}/contact`}
              render={() => <div>contact.....</div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TabApp;
