
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import Signin from './views/signin';
import './app.css';

function App () {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" replace />}></Route>
        <Route
          exact
          path="/signin"
          element={<Signin />}
        >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

