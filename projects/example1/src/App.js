import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
  </nav>
)

const Home = () => <h1>Home</h1>;

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <nav>
      <Link to='/menu/food'>Food</Link>
      <Link to='/menu/drinks'>Dirnks</Link>
      <Link to='/menu/Sides'>Sides</Link>
    </nav>
    <div>
      <Switch>
        <Route exact path="/menu/food" render={({ match }) => <h1>food</h1>} />
        <Route exact path="/menu/drinks" render={({ match }) => <h1>drinks</h1>} />
        <Route exact path="/menu/sides" render={({ match }) => <h1>sides</h1>} />
        <Route render={({ match }) => <h1>not found</h1>} />
      </Switch>
    </div>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
);

export default App;