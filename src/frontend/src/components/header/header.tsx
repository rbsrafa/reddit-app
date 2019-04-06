import React, { Component } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import UserDropdown from '../user-dropdown/user-dropdown';

interface Props {
  token: string | null
}

export default class Header extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <Link className="navbar-brand" to={'/'}><i className="fab fa-lg fa-reddit-alien m-2 alien"></i>reddit</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/'><i className="fas fa-lg fa-rocket m-2 text-primary"></i>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/link_editor'><i className="fas fa-lg fa-pencil-alt m-2 text-primary"></i>Create Link</Link>
                </li>
              </ul>
              <UserDropdown username='rbsrafa' profileImage={''}/>
            </div>
  
          </nav>
        </nav>
      </React.Fragment>
    )
  }
}
