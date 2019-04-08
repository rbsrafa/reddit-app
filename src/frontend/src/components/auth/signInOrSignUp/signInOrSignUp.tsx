import React, { Component } from 'react'
import { signUpService, signInService } from '../../../services/authService';
import { withRouter } from 'react-router';
import { User } from '../../../interfaces/User';

interface Props {
  isSignIn: boolean;
  match: any;
  location: any;
  history: any;
}

interface State {
  user: User;
  regStatus: string;
}

class _SignInOrSingUp extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      },
      regStatus: ''
    }
  }

  private _updateUser(e: any) {
    let user = this.state.user;
    (user as any)[e.target.id] = e.target.value;
    this.setState({ user });
  }

  private _renderRegistrationStatus() {
    if (this.state.regStatus === '') return <div></div>
    else return <div className='alert alert-success'>{this.state.regStatus}</div>
  }

  private async _handleSignup() {
    const data = this.state.user;
    const res = await signUpService(data);
    if (res.status === 201) {
      this.setState({ regStatus: 'Registration Successfull!' });
      setTimeout(() => {
        this.props.history.push('/sign_in');
      }, 3000);
    } else {
      // TODO error handling
    }
  }

  private async _handleSignin() {
    const email = this.state.user.email;
    const password = this.state.user.password;
    const res = await signInService(email, password);
    if(res.status === 201){
      console.log(await res.json())
    }else{
      console.log(res);
    }
  }

  render() {
    if (this.props.isSignIn) {
      return this._signin();
    } else {
      return this._signup();
    }
  }

  private _signin() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="password"
            className="form-control"
            id="password"
            placeholder="secret"
          />
        </div>
        <button
          onClick={() => this._handleSignin()}
          type="button"
          className="btn btn-primary"
        >Launch
        </button>
      </React.Fragment>
    );
  }

  private _signup() {
    return (
      <React.Fragment>
        <div className="form-group">
          {this._renderRegistrationStatus()}
          <label htmlFor="firstName">First Name</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Alien"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Ated"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Alien51"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="password"
            className="form-control"
            id="password"
            placeholder="secret"
          />
        </div>
        <button
          onClick={() => this._handleSignup()}
          type="button"
          className="btn btn-primary"
        >Start Engine
        </button>
      </React.Fragment>
    );
  }
}

export const SignInOrSignUp = withRouter(props =>
  <_SignInOrSingUp
    isSignIn={props.match.path.includes('sign_in') ? true : false}
    {...props}
  />);