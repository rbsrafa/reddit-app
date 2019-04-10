import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './comment.css';

interface Props {
  username: string;
  userId: number;
}

export default class Comment extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <small>Comment as <Link to={`/user/${this.props.userId}`}>{this.props.username}</Link></small>
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
