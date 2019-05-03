import React, { Component } from 'react'
import { ILinkView } from '../../../interfaces/ILinkView';
import './linkView.css'
import NewComment from '../../comments/newComment/comment';
import CommentView from '../../comments/commentView/commentView';

interface Props {
  item: ILinkView;
  onUpdate: Function;
}

export default class LinkView extends Component<Props> {

  constructor(props: Props) {
    super(props);
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

  render() {
    const item = this.props.item;
    
    return (
      <React.Fragment>
        <div id='link-row2' className='row no-gutters'>
          <div id='score' className="col-1">
            <i 
              onClick={() => this._handleUpvode()}
              className="fas fa-lg fa-chevron-up"
            ></i><br />
            {this._countVotes()}<br />
            <i 
              onClick={() => this._handleDownvote()}
              className="fas fa-lg fa-chevron-down"
            ></i>
          </div>
          <div id='link-body' className="col-11">

            <small>Posted by /u/{item.user.username} {item.createdAt.slice(0, 10)}</small>
            <h5 id='item-title'>{this.props.item.title}</h5>
            <a href={this.props.item.url}><small>{this.props.item.url.length > 40 ? `${this.props.item.url.slice(0, 40)}...` : this.props.item.url}</small></a><br />
            <small><i className="fas fa-comment-alt"></i><span style={{ marginRight: 5 }}></span>{item.comments.length} comments</small>
            <div className="pt-2">
              <NewComment
                username={item.user.username}
                userId={item.user.id}
                linkId={item.id}
              ></NewComment>
              <div className='pt-3 pb-2'>Comments:</div>
              {item.comments.map((comment: any, i: any) => {
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
              })}

            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
