import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route
        path="/:date(\d{4}-\d{2}-\d{2}):ext(\.[a-z]+)/"
        render={({match}) => (
          <div>
            <h1>YES Matched!</h1>
            <div>date: {match.params.date}</div>
            <div>ext: {match.params.ext}</div>
          </div>
        )}
        />
    </div>
  </Router>
);

export default App;