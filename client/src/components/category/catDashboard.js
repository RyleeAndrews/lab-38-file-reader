import React from 'react';
import {connect} from 'react-redux';
import CatForm from './catForm.js';
import CatList from './catList.js';
import AuthDashboard from '../auth/dashboard.js';
import * as actions from './catActions.js';

class Category extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <AuthDashboard>
        <div className="header">
          <div className="headerWords">Rylees Awesome Front and Back End App!!</div>
          <div className="siteForm">
            <CatForm handler={this.props.categoryCreate}/>
          </div>
          </div>
          <CatList cats={this.props.categories} update={this.props.categoryUpdate} delete={this.props.categoryDelete}/>
        </AuthDashboard>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(actions.categoryCreate(category)),
  categoryUpdate: category => dispatch(actions.categoryUpdate(category)),
  categoryDelete: category => dispatch(actions.categoryDelete(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
