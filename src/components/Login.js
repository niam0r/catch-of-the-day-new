import React from 'react';

const Login = () => {
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button
      className="github"
      onClick={() => this.props.authenticate("Github")}
    >
      Log In With Github
    </button>
    <button
      className="twitter"
      onClick={() => this.props.authenticate("twitter")}
    >
      Log In With twitter
    </button>
    <button
      className="facebook"
      onClick={() => this.props.authenticate("facebook")}
    >
      Log In With facebook
    </button>
  </nav>
};

export default Login;
