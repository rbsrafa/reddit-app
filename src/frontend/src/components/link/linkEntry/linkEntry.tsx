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
    return (
      <React.Fragment>
        <div id='link-row' className='row no-gutters'>
          <div id='score' className="col-1">
            <i className="fas fa-lg fa-chevron-up"></i><br />
            {this.props.item.score}<br />
            <i className="fas fa-lg fa-chevron-down"></i>
          </div>
          <div id='link-body' className="col-11">
            <small>Posted by /u/{this.props.item.username} {this.props.item.date}</small>
            <h5 id='item-title'><Link style={{color: 'white'}} to={`/link/${this.props.item.id}`}>{this.props.item.title}</Link></h5>
            <a href={this.props.item.url}><small>{this.props.item.url.length > 40 ? `${this.props.item.url.slice(0, 40)}...` : this.props.item.url}</small></a><br />
            <Link style={{color: 'white', fontSize: 13}} to={`/link/${this.props.item.id}`}><i className="fas fa-comment-alt"></i><span style={{marginRight: 5}}></span>{this.props.item.commentCount} comments</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }

}
