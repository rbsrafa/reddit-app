import React, { Component } from 'react'
import './linkLoading.css';

export default class LinkLoading extends Component {
  render() {
    return (
      <React.Fragment>

        <div id='pro' className=' no-gutters m-2'>
          <div id='test' className="progress m-3">
            <div
              className="bg-secondary progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={99}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '100%' }}
            >
            </div>
          </div>

          <div id='test' className="progress m-3">
            <div
              className="bg-secondary progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={99}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '100%' }}
            >
            </div>
          </div>

          <div id='test' className="progress m-3">
            <div
              className="bg-secondary progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={99}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '100%' }}
            >
            </div>
          </div>
        </div>
        


      </React.Fragment>
    )
  }
}
