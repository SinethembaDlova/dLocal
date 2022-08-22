
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import Signin from './views/signin';
import Signup from './views/signup';
import './app.css';

function App () {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" replace />} />
        <Route
          exact
          path="/signin"
          element={<Signin />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </Router>
  );
}

export default App;

