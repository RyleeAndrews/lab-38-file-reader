import React from 'react';
import AuthDashboard from './auth/dashboard.js';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="home">
        <AuthDashboard>
          <h2> Welcome Home </h2>
        </AuthDashboard>
      </div>
    );
  }
}

export default Home;
