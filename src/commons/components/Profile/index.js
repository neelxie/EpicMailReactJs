/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { connect } from "react-redux";
import '../../CSS/Profile.scss';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  
  onSubmitHandler = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loggingIn } = this.props;

    // if (email && password) {
    loggingIn(email, password);
    // }
  }
  render() {
    return (
        <div className="container-fluid">
          <div className="menu">
            <h5>Welcome User</h5>
            <ul>
              <li>
                <a href="#" className="mails">
                  <span>Compose</span>
                </a>
              </li>
              <li>
                <a href="#" className="mails">
                  <span>Inbox</span>
                </a>
              </li>
              <li>
                <a href="#" className="mails">
                  <span>Sent</span>
                </a>
              </li>
              <li>
                <a href="" className="mails">
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>    
          <div className="main">
            <div className="banner">
                <h1>Epic Mail</h1>
            </div>
            <div className="content">
              <h1>No messages yet</h1>
            </div>
          </div>
        </div>
      
    );
  }
}
const mapStateToProps = state => {
  const { isProcessing,  errorMessage, userMsg } = state.loginReducer;
  return {
    isProcessing, errorMessage, userMsg
  };
};
const mapDispatchToProps = dispatch => ({
  loggingIn: (email, password) => {
    dispatch(loginActions({ email, password }));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
