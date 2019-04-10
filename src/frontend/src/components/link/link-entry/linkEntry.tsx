import React, { Component } from 'react'
import './linkEntry.css';
import { Link } from '../../../interfaces/Link';

interface Props {
  link: Link;
}

export default class LinkEntry extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>

        <div className="container-fluid p-1">
          <div id='link-row' className='row no-gutters'>
            <div id='score' className="col-1">
              <i className="fas fa-lg fa-chevron-up"></i><br />
              {this.props.link.score}<br />
              <i className="fas fa-lg fa-chevron-down"></i>
            </div>
            <div id='link-body' className="col-11">
              <small>Posted by /u/{this.props.link.username} {this.props.link.date}</small>
              <h4>{this.props.link.title}</h4>
              <a href={this.props.link.url}><small>{this.props.link.url}</small></a><br />
              <small><i className="fas fa-comment-alt"></i> comment</small>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}
