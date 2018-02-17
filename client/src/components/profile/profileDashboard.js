import './profile.scss';
import React from 'react';
import AuthDashboard from '../auth/dashboard.js';
import {connect} from 'react-redux';
import * as actions from './profileActions.js';
import {renderIf, photoToDataUrl} from '../../lib/photoLib.js';

class Profile extends React.Component {
  constructor(props){
    super(props);


    let initialState = {
      firstname: '',
      lastname: '',
      about: '',
      avatar: '',
      avatarFile: '',
    };

    this.state = Object.assign(initialState, this.props.profile)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeOfFirstname = this.onChangeOfFirstname.bind(this);
    this.onChangeOfLastname = this.onChangeOfLastname.bind(this);
    this.onChangeOfAbout = this.onChangeOfAbout.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.profile){
      this.setState(props.profile);
    }
    let preview = null;
    this.setState({preview});
  }

  onChangeOfFirstname(event){
    event.preventDefault();
    this.setState({ firstname: event.target.value });
  }

  onChangeOfLastname(event){
    event.preventDefault();
    this.setState({ lastname: event.target.value });
  }

  onChangeOfAbout(event){
    event.preventDefault();
    this.setState({ about: event.target.value });
  }

  handleImage(event){
    let {files} = event.target;
    let avatarFile = files[0];

    this.setState({avatarFile});

    photoToDataUrl(avatarFile)
      .then( preview => {
        this.setState({preview});
      })
      .catch(console.error);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateUser(Object.assign({}, this.props.profile, this.state));
  }

  render(){
    let hasPreview = this.state.preview || undefined;
    console.log(this.state._id);
    return(
      <div>
        <div className="headerWords"> The one stop profile shop for &nbsp;</div>
        <AuthDashboard>
          <div className="welcome"> {this.props.profile.username} </div>
        </AuthDashboard>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>First Name</span>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChangeOfFirstname}
            />
          </label>
          <br />
          <label>
            <span>Last Name</span>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChangeOfLastname}
            />
          </label>
          <br />
          <label>
            <span>About</span>
            <textarea
              type="text"
              name="about"
              value={this.state.about}
              onChange={this.onChangeOfAbout}
            />
          </label>
          <br />
          <label>
            <figure>
              <img src={this.state.avatar} />
              <figcaption>Current Avatar </figcaption>
            </figure>
            {
              renderIf(hasPreview,
                <figure>
                  <img src={this.state.preview} />
                  <figcaption>New Avatar </figcaption>
                </figure>
              )
            }
            <br />
            <input
              name="avatar"
              type="file"
              onChange={this.handleImage}
            />
          </label>

          <button type="submit">
          save profile
          </button>
        </form>
        <button type="submit" onClick={() => this.props.deleteUser(this.state._id)}> delete </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = ( dispatch, getState ) => ({
  updateUser: user => dispatch(actions.updateUser(user)),
  deleteUser: user => dispatch(actions.deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
