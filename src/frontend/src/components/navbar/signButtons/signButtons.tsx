import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SignButtons extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navbar-nav ml-auto">
          <li className='nav-item'>
            <Link to='/sign_in'>
              <button className="btn btn-sm btn-outline-primary m-1 px-4" data-toggle="collapse" data-target=".navbar-collapse.show">
                Sign in
              </button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign_up'>
              <button className="btn btn-sm btn-outline-primary m-1 px-4" data-toggle="collapse" data-target=".navbar-collapse.show">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
