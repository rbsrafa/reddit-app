import React, { Component } from 'react';
import './commentView.css';
import { getAuthToken } from '../../with_auth/with_auth';

interface Props {
  id: number;
  content: string;
  date?: string;
  username?: string;
  userId?: number;
  onUpvote?: Function;
  onDownvote?: Function;
}

export default class CommentView extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const data = this.props;
    return (
      <React.Fragment>
        <div id='comment-row' className='w-100 row no-gutters mt-1 mb-1'>
          <div id='score' className="col-1">
            {getAuthToken() ? this._renderVote() : <div></div>}
          </div>
          <div id='link-body' className="col-11">
            {this._renderPostedBy()}
            <p>{data.content}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }

  private _renderVote(){
    const data = this.props;
    return data.username !== undefined ?
      (
        <div>
          <i className="fas fa-chevron-up"></i><br />
          <i className="fas fa-chevron-down"></i>
        </div>
      )
      :
      <div></div>
  }

  private _renderPostedBy(){
    const data = this.props;
    return data.username !== undefined ?
      <small>{data.username} {data.date}</small>
      :
      <div></div>
  }

}
