import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { createBrowserHistory } from 'history';
import Login from './screens/clients/Login';
import SignUp from './screens/clients/Signup';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
      </Routes>
    </Router>
  );
};

export default App;
