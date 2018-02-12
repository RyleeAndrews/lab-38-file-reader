import './profile.scss';
import React from 'react';
import AuthDashboard from '../auth/dashboard.js';
import {connect} from 'react-redux';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    console.log(this.props.username);
    return(
      <div>
        <div className="headerWords"> The one stop profile shop for &nbsp;</div>
        <AuthDashboard>
          <div className="welcome"> {this.props.profile.username} </div>
        </AuthDashboard>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Profile);
