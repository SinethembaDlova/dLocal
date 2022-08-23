
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './views/home';
import Public from './views/public';
import Signin from './views/signin';
import Signup from './views/signup';
import User from './views/user';
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
        <Route
          exact
          path="/public"
          element={<Public />}
        />
        <Route element={<PrivateRoutes />}>
          <Route
            exact
            path="/user"
            element={<User />}
          />
          <Route
            exact
            path="/home"
            element={<Home />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

