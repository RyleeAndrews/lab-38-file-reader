import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions.js';
import AuthForm from './authForm.js';


class AuthDashboard extends React.Component {
  constructor(props){
    super(props);

    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleSignInPage = this.toggleSignInPage.bind(this);
    this.state = {
      init: true,
      signin: false,
      signinPage: true,
    }
  }


  componentWillMount() {
    this.props.authLogin()
      .then( () => this.setState({init:false}) );
  }

  toggleSignIn(){
    this.setState({signin: !this.state.signin});
  }

  toggleSignInPage(){
    this.setState({signinPage: !this.state.signinPage});
  }

  render(){
    console.log(this.props.auth.token);
    if(this.state.init){
      return null;
    }
    return(
      <div>
        {!this.props.auth.token ? (
          <div className="authForm">
            <AuthForm
            signinPage={this.state.signinPage}
            signin={this.state.signin}
            signUp={this.props.authCreate}
            signIn={this.props.authLogin}/>
            <button className="authButton" onClick={this.toggleSignIn} type="submit"> sign in </button>
            <button className="authButton" onClick={this.toggleSignIn} type="submit"> sign up </button>
          </div>
        ) : (<div>
          {this.props.children}
        </div>
        )
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth
});


const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(actions.authLogin(user)),
  authCreate: user => dispatch(actions.authCreateAccount(user)),
  authLogout: () => dispatch(actions.authLogout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);
