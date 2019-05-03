import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './comment.css';
import { getAuthToken } from '../../with_auth/with_auth';
import { createComment } from '../../../services/commentService';

interface Props {
  username: string;
  userId: number;
  linkId: number;
  onCommentCreated: Function;
}

interface State {
  content: string | null
}

export default class NewComment extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      content: null
    }
  }

  private _renderAuthUser(){
    if(getAuthToken()) return JSON.parse(localStorage.getItem('rbs-reddit-app-logged-user')!).username;
    else return <div></div>;
  }

  private async _handleOnComment(){
    const comment = {
      content: this.state.content,
      linkId: this.props.linkId
    }
    const res = await createComment(comment);
    const json = await res.json();
    this.props.onCommentCreated();
  }

  private _updateContent(content: string){
    this.setState({content});
  }

  render() {
    return (
      <React.Fragment>
        {getAuthToken() ? 
          (
            <small>Comment as <Link to={`/user/${this.props.userId}`}>{this._renderAuthUser()}</Link></small>
          ): <div></div>}
        <div className="">
          <div className="input-group">
            <textarea 
              onKeyUp={(e) => this._updateContent((e as any).target.value)}
              id='content' 
              className="form-control-lg" 
              aria-label="With textarea"
            ></textarea>
          </div>
          {getAuthToken() ? 
          (
            <button 
              onClick={() => this._handleOnComment()}
              className='btn btn-sm btn-outline-primary mt-2'
            >
            Comment
            </button>
          ): <div></div>}
        </div>
      </React.Fragment>
    )
  }
}
