import React, { Component } from 'react'
import './userCard.css';
import {CreateLink} from '../../link/create/createLink';
import { Link } from 'react-router-dom';

interface Props {
  firstName: string;
  lastName: string;
  profileImage: string;
  username: string;
  bio: string;
}

export default class UserProfile extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div className="mx-1 bg-dark p-2 border">
          <img className='w-50 rounded image-border' src={this.props.profileImage} alt="" />
          <div className="pt-2">
            <h5>{`${props.firstName} ${props.lastName}`}</h5>
            <h6>u/{props.username}</h6>
            <p>{props.bio}</p>
          </div>
          <Link to='/link_editor'><button className='btn btn-sm btn-outline-primary w-100'>Create Link</button></Link>
        </div>
      </React.Fragment>
    )
  }
}
