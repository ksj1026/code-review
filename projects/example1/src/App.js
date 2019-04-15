import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

const isLoggedIn = false;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/protected">인증된 페이지로 접근하기</Link>
  </nav>
);

const SignIn = () => (
  <div>
    <h2>로그인</h2>
    <form>
      <input placeholder="ID" type="text" />
      <input placeholder="PW" type="password" />
    </form>
  </div>
);

const ProtectedPage = () => <h2>인증된 페이지</h2>;

const Home = () => <h1>Home</h1>;

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route
        path="/signin"
        render={() => (isLoggedIn ? <ProtectedPage /> : <SignIn />)}
      />
      <Route
        path="/protected"
        render={() =>
          isLoggedIn ? <ProtectedPage /> : <Redirect to="/signin" />
        }
      />
    </div>
  </Router>
);

export default App;
