import React, { Component } from 'react'
import {SignInOrSignUp} from '../../components/auth/signInOrSignUp/signInOrSignUp';

export class SigninPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 offset-lg-4 col-lg-4">
              <h4><i className="fas fa-sign-in-alt mr-2 text-primary"></i>Sign In</h4>
              <SignInOrSignUp />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}