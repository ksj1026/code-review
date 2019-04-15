import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import "./App.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Form {this.state.dirty ? "작성중" : ""}</h1>
        <input type="text" onInput={this.setDirty} />
        <Prompt
          when={this.state.dirty}
          message={"저장되지 않은 데이터가 있습니다. 정말 이동할까요?"}
        />
      </div>
    );
  }
}

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </nav>
);

const Home = () => <h1>Home</h1>;

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
);

export default App;
