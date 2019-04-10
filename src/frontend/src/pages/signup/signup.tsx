import React, { Component } from 'react'
import {SignInOrSignUp} from '../../components/auth/signInOrSignUp/signInOrSignUp';

export class SignupPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 ">
              <h4><i className="fas fa-user-plus mr-2 text-primary"></i>Sign Up</h4>
              <SignInOrSignUp />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}