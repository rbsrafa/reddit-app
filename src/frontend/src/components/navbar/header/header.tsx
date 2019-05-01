import React, { Component } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import UserDropdown from '../../user/user-dropdown/user-dropdown';
import SignButtons from '../signButtons/signButtons';
import { withAuth } from '../../with_auth/with_auth';
import { User } from '../../../interfaces/User';
import { getAuthUser } from '../../../services/authService';

interface Props {
  token: string | null
}

interface State {
  user: User | null
}

class _Header extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      user: null
    }
  }

  async componentDidMount(){
    if(!this.state.user && this.props.token) {
      const res = await getAuthUser(this.props.token);
      const user = await res.json();
      this.setState({user});
    }
  }

  async componentDidUpdate() {
    if(!this.state.user && this.props.token) {
      const res = await getAuthUser(this.props.token);
      const user = await res.json();
      this.setState({user});
    }
  }

  render() {

    return (
      <React.Fragment>
        <nav>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand" to={'/'}><i className="fab fa-lg fa-reddit-alien m-2 alien"></i>reddit</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to='/'><i className="fas fa-rocket m-2 text-primary"></i>Home</Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to='/link_editor'><i className="fas fa-pencil-alt m-2 text-primary"></i>Create Link</Link>
                </li>
              </ul>

              {this.state.user ? 
                <UserDropdown 
                  username={this.state.user.username} 
                  profileImage={this.state.user.profileImage!}
                  userId={this.state.user.id}
                /> 
                :
                <SignButtons />
              }

            </div>

          </nav>
        </nav>
      </React.Fragment>
    )
  }
}

export const Header = withAuth(props => <_Header token={props.authToken} />);
