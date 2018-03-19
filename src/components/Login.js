import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <nav className="login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory.</p>
      <button
        className="github"
        onClick={() => props.authenticate("Github")}
      >
        Log In With Github
      </button>
      <button
        className="twitter"
        onClick={() => props.authenticate("twitter")}
      >
        Log In With twitter
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate("facebook")}
      >
        Log In With facebook
      </button>
    </nav>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
