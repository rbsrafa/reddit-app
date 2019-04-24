import React, { Component } from 'react'
import { signUpService, signInService } from '../../../services/authService';
import { withRouter } from 'react-router';
import { User } from '../../../interfaces/User';
import { setAuthToken } from '../../with_auth/with_auth';
import * as joi from 'joi';
import './signInOrSignUp.css';

interface Props {
  isSignIn: boolean;
  match: any;
  location: any;
  history: any;
}

interface State {
  user: User;
  error: string | null;
}

class _SignInOrSingUp extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        id: -1,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        profileImage: {id: -1, url: ''}
      },
      error: null
    }
  }

  private _updateUser(e: any) {
    let user = this.state.user;
    (user as any)[e.target.id] = e.target.value;
    this.setState({ user });
  }

  private async _handleSignup() {
    const data = this.state.user;
    const res = await signUpService(data);
    if (res.status === 201) {
      setTimeout(() => {
        this.props.history.push('/sign_in');
      }, 3000);
    }else{
      let error = await res.json();
      if(error.error.detail){
        this.setState({error: error.error.detail});
      }
    }
  }

  private async _handleSignin() {
    const email = this.state.user.email;
    const password = this.state.user.password;
    const res = await signInService(email, password!);
    if(res.status === 201){
      const token = (await res.json()).token;
      setAuthToken(token);
      this.props.history.push('/');
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
          {this._renderEmailValidation()}
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
          {this._renderPasswordValidation()}
        </div>
        <button
          id='login-btn'
          onClick={() => this._handleSignin()}
          type="button"
          className="btn btn-sm btn-primary"
        >Launch
        </button>
      </React.Fragment>
    );
  }

  private _signup() {
    return (
      <React.Fragment>
        <div className="form-group">
          {this.state.error ? <div className='small alert alert-sm'>{this.state.error}</div> : <div></div>}
          <label htmlFor="firstName">First Name</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Alien"
          />
          {this._renderFirstNameValidation()}
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
          {this._renderLastNameValidation()}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onKeyUp={(e) => this._updateUser(e)}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Area51"
          />
          {this._renderUsernameValidation()}
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
          {this._renderEmailValidation()}
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
          {this._renderPasswordValidation()}
        </div>
        <button
          onClick={() => this._handleSignup()}
          type="button"
          className="btn btn-sm btn-primary"
          disabled={this.state.error ? true : false}
        >Start Engine
        </button>
      </React.Fragment>
    );
  }

  private _renderFirstNameValidation(){
    const validation = joi.validate(
      {firstName: this.state.user.firstName}, 
      {firstName: joi.string().min(3).max(30).required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.user.firstName.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

  private _renderLastNameValidation(){
    const validation = joi.validate(
      {lastName: this.state.user.lastName}, 
      {lastName: joi.string().min(3).max(50).required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.user.lastName.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

  private _renderUsernameValidation(){
    const validation = joi.validate(
      {username: this.state.user.username}, 
      {username: joi.string().min(3).max(30).required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.user.username.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

  private _renderEmailValidation(){
    const validation = joi.validate(
      {email: this.state.user.email}, 
      {email: joi.string().email().required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.user.email.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

  private _renderPasswordValidation(){
    const validation = joi.validate(
      {password: this.state.user.password}, 
      {password: joi.string().min(6).required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.user.password!.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

}

export const SignInOrSignUp = withRouter(props =>
  <_SignInOrSingUp
    isSignIn={props.match.path.includes('sign_in') ? true : false}
    {...props}
  />);