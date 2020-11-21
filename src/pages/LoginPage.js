import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login} className="login-form">
          <h1>Login</h1>
          <div>

            <h5>Username:</h5>
            <input
              type="text"
              name="username"
              className="form-input"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />

          </div>

          <h5>Password:</h5>
          <input
            type="password"
            name="password"
            className="form-input"
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
          />


          <div onClick={this.login} className="login">Login</div>
          <div onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }} className="register">Register</div>
          
        </form>

        {/* <div className="login-container">
          <h1 className="login-title">Welcome</h1>
          <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={p => setPassword(p.target.value)} />
            <button className="login-sign-in" onClick={signIn} type="submit">Sign In</button>
          </form>
          <p className="agreement">By signing in, you agree to the [fake] terms & conditions of Zeus Box.</p>
          <hr className="login-line-break" />
          <p className="or">or</p>
          <button className="login-register" onClick={register}>Create an Account</button>
        </div> */}



      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
