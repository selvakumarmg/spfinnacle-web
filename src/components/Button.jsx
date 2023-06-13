import React from 'react';
import '../styles/button.css';
import { createBrowserHistory } from 'history';

const LoginButton = () => {
  const history = createBrowserHistory();

  const handleLoginButtonClick = () => {
    history.push('/login');
  };
  return (
    <button onClick={handleLoginButtonClick} className="btn btn-get-started">
      Login
    </button>
  );
};

export default LoginButton;
