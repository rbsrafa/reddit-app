import React, { Component } from 'react'
import { ILinkView } from '../../../interfaces/ILinkView';
import { Link } from 'react-router-dom';
import './linkView.css'
import Comment from '../comment/comment';

interface Props {
  item: ILinkView;
}

export default class LinkView extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <React.Fragment>
        <div id='link-row' className='row no-gutters'>
          <div id='score' className="col-1">
            <i className="fas fa-lg fa-chevron-up"></i><br />
            {item.votes.length}<br />
            <i className="fas fa-lg fa-chevron-down"></i>
          </div>
          <div id='link-body' className="col-11">
            
              <small>Posted by /u/{item.user.username} {item.createdAt.slice(0, 10)}</small>
              <h5 id='item-title'>{this.props.item.title}</h5>
              <a href={this.props.item.url}><small>{this.props.item.url.length > 40 ? `${this.props.item.url.slice(0, 40)}...` : this.props.item.url}</small></a><br />
              <small><i className="fas fa-comment-alt"></i><span style={{ marginRight: 5 }}></span>{item.comments.length} comments</small>
              <div className="pt-2">
                <Comment
                  username={item.user.username}
                  userId={item.user.id}
                ></Comment>
              </div>
            


          </div>
        </div>
      </React.Fragment>
    )
  }
}
