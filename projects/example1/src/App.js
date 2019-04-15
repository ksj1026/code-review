import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old">Old</Link>
    <Link to="/new">New</Link>
  </nav>
);

const Home = () => <h1>Home</h1>;

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route
        path="/new/:id"
        render={({ match }) => <h1>New {match.params.id}</h1>}
      />
      <Route
        path="/old/:id"
        render={({ match }) => (
          <div>
            <Redirect to={"/new/" + match.params.id} />
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
