'use strict';

import React from 'react';
import Profile from '../profile/profileDashboard.js';

class AuthForm extends React.Component {
  constructor(props){
    super(props);



    this.handleChangeOfUsername = this.handleChangeOfUsername.bind(this);
    this.handleChangeOfPassword = this.handleChangeOfPassword.bind(this);
    this.handleChangeOfEmail = this.handleChangeOfEmail.bind(this);
    this.onSubmitOfSignin = this.onSubmitOfSignin.bind(this);
    this.onSubmitOfSignup = this.onSubmitOfSignup.bind(this);

    this.state = {
      username: '',
      password: '',
      email: '',
      error: null,
    };
  }

  handleChangeOfUsername(event){
    event.preventDefault();
    this.setState({username: event.target.value});
  }

  handleChangeOfPassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleChangeOfEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }


  onSubmitOfSignin(event){
    event.preventDefault();
    this.props.signIn(Object.assign({}, this.state));
  }

  onSubmitOfSignup(event){
    event.preventDefault();
    this.props.signUp(Object.assign({}, this.state));
  }

  render(){

    console.log(this.state.signin);
    return(
      <div className="authForm">
        {
          this.props.signin ? (
            <form className="signinForm" onSubmit={this.onSubmitOfSignin}>
              <label id="username"> enter your username: </label>
              <input htmlFor="username" value={this.state.username} onChange={this.handleChangeOfUsername}/>
              <br/>
              <label id="password"> enter your password: </label>
              <input htmlFor="password" type="password" value={this.state.password} onChange={this.handleChangeOfPassword}/>
              <br/>
              <button type="submit"> submit </button>
            </form>
          ) : (
            <form className="signupForm" onSubmit={this.onSubmitOfSignup}>
              <label id="email"> enter your email: </label>
              <input htmlFor="email" value={this.state.email} onChange={this.handleChangeOfEmail}/>
              <br/>
              <label id="signUpUsername"> create a username: </label>
              <input htmlFor="signUpUsername" value={this.state.username} onChange={this.handleChangeOfUsername}/>
              <br/>
              <label id="signUpPassword"> create a password: </label>
              <input htmlFor="signUpPassword" type="password" value={this.state.password} onChange={this.handleChangeOfPassword}/>
              <button type="submit"> submit </button>
            </form>
          )
        }
      </div>
    );
  }
}

export default AuthForm;
