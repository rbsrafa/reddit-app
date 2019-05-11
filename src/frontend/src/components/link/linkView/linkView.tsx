import React, { Component } from 'react'
import { ILinkView } from '../../../interfaces/ILinkView';
import './linkView.css'
import NewComment from '../../comments/newComment/comment';
import CommentView from '../../comments/commentView/commentView';
import { any } from 'joi';
import { getAuthToken } from '../../with_auth/with_auth';
import { Link } from 'react-router-dom';
import { getAuthUser } from '../../../services/authService';

interface Props {
  item: ILinkView;
  onUpdate: Function;
  onCommentCreated: Function;
}

interface State {
  isAuthor: boolean;
}

export default class LinkView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isAuthor: this.props.item.user.id === (localStorage.getItem('rbs-reddit-app-logged-user') ? (JSON.parse(localStorage.getItem('rbs-reddit-app-logged-user')!).id) : -1)
    }
  }

  private _handleUpvode(){
    this.props.onUpdate(1, this.props.item.id);
  }

  private _handleDownvote(){
    this.props.onUpdate(0, this.props.item.id);
  }

  private _countVotes(){
    const upVotes = this.props.item.votes.filter((vote:any) => {
      return vote.flag === true;
    });

    const downVotes = this.props.item.votes.filter((vote: any) => {
      return vote.flag === false;
    });
        
    return (upVotes.length ? upVotes.length:0) - (downVotes.length ? downVotes.length:0);
  }

  private _onCommentCreated(){
    this.props.onCommentCreated();
  }

  private _renderEditButton(itemId: number){
    if(this.state.isAuthor){
      return (
        <button className='btn btn-sm btn-outline-primary float-right'><Link to={`/link_editor/${itemId}`}>Edit</Link></button>
      )
    }else{
      return <div></div>
    }
  }

  private _renderComments(){
    const comments = this.props.item.comments;
    
    return comments.map((comment: any, i: any) => {
      return (
        <CommentView
          id={comment.id}
          content={comment.content}
          date={comment.createdAt.slice(0,10)}
          username={comment.user.username}
          userId={comment.user.userId}
          onUpvote={() => { }}
          onDownvote={() => { }}
          key={i}
        />
      )
    })
  }

  render() {
    const item = this.props.item;
    
    return (
      <React.Fragment>
        <div id='link-row2' className='row no-gutters'>
          <div id='score' className="col-1">
            {getAuthToken() ? (<div>
              <i 
                onClick={() => this._handleUpvode()}
                className="fas fa-lg fa-chevron-up"
              ></i><br />
              {this._countVotes()}<br />
              <i 
                onClick={() => this._handleDownvote()}
                className="fas fa-lg fa-chevron-down"
              ></i>
            </div>) : <div></div>}
            
          </div>
          <div id='link-body' className="col-11">

            <small>Posted by /u/{item.user.username} {item.createdAt.slice(0, 10)}</small>
            
            {this._renderEditButton(item.id)}
            
            <h5 id='item-title'>{this.props.item.title}</h5>
            <a href={this.props.item.url}><small>{this.props.item.url.length > 40 ? `${this.props.item.url.slice(0, 40)}...` : this.props.item.url}</small></a><br />
            <small><i className="fas fa-comment-alt"></i><span style={{ marginRight: 5 }}></span>{item.comments.length} comments</small>
            <div className="pt-2">
              <NewComment
                username={item.user.username}
                userId={item.user.id}
                linkId={item.id}
                onCommentCreated={() => this._onCommentCreated()}
              ></NewComment>
              <div className='pt-3 pb-2'>Comments:</div>
              <div className='col-11'>
                {this._renderComments()}
              </div>
              
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
