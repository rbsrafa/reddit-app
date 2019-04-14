import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CommunityInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="border m-1 p-2">
            <div className="div p-2 pb-4">
              <span><i className="fas fa-users"></i> r/cct</span>
              <span id='users' className='float-right mr-2'>100 users</span>
            </div>
            <div className="div p-1">
              <Link to={'/link_editor'}><button className='btn btn-sm btn-outline-primary p-1 w-100'>
                Create Link
              </button>
              </Link>
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
