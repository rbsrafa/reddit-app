import React, { Component } from 'react'
import './linkEntry.css';
import { ILinkEntry } from '../../../interfaces/ILinkEntry';
import { Link } from 'react-router-dom';

interface Props {
  item: ILinkEntry;
}

export default class LinkEntry extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const props = this.props.item;
    return (
      <React.Fragment>
        <div id='link-row' className='row no-gutters'>
          <div id='score' className="col-1">
            {this._renderScore()}
          </div>
          <div id='link-body' className="col-11">
            {this._renderPostedBy()}
            <h5 id='item-title'><Link style={{ color: 'white' }} to={`/link/${props.id}`}>{props.title}</Link></h5>
            <a href={props.url}><small>{props.url.length > 40 ? `${props.url.slice(0, 40)}...` : props.url}</small></a><br />
            {this._renderCommentsCount()}
          </div>
        </div>
      </React.Fragment>
    )
  }

  private _renderScore() {
    return this.props.item.score !== undefined ?
      (
        <div>
          <i className="fas fa-lg fa-chevron-up"></i><br />
          {this.props.item.score}<br />
          <i className="fas fa-lg fa-chevron-down"></i>
        </div>
      )
      :
      <div></div>
  }

  private _renderPostedBy() {
    return this.props.item.username !== undefined ?
      (
        <small>Posted by u/{this.props.item.username} {this.props.item.date}</small>
      )
      :
      <div></div>
  }

  private _renderCommentsCount(){
    return this.props.item.commentCount !== undefined ?
      (
        <Link 
          style={{ color: 'white', fontSize: 13 }} 
          to={`/link/${this.props.item.id}`}
        >
          <i className="fas fa-comment-alt"></i>
          <span style={{ marginRight: 5 }}></span>  
          {this.props.item.commentCount} comments
        </Link>
      )
      :
      <div></div>
  }

}
