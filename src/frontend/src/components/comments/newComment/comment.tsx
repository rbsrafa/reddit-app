import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './comment.css';

interface Props {
  username: string;
  userId: number;
}

export default class NewComment extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  private _renderAuthUser(){
    if(localStorage.getItem('rbs-reddit-app-logged-user')) return JSON.parse(localStorage.getItem('rbs-reddit-app-logged-user')!).username;
    else return 'Alien';
  }

  render() {
    return (
      <React.Fragment>
        <small>Comment as <Link to={`/user/${this.props.userId}`}>{this._renderAuthUser()}</Link></small>
        <div className="">
          <div className="input-group">
            <textarea id='comment-input' className="form-control-lg" aria-label="With textarea"></textarea>
          </div>
          <button className='btn btn-sm btn-outline-primary mt-2'>Comment</button>
        </div>
      </React.Fragment>
    )
  }
}
