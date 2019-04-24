import React, { Component } from 'react'
import './createLink.css';

export default class CreateLink extends Component {



  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
            <h6>Create a link</h6>
            <hr style={{ background: 'rgb(75, 71, 71)' }} />

            <div id='types' className="row no-gutters">
              <div className="col-4">
                <button className='w-100 btn btn-sm btn-outline-secondary expand'><i className="fas fa-link"></i> Link</button>
              </div>
              <div className="col-4">
                <button disabled className='w-100 btn btn-sm btn-outline-secondary expand'><i className="fab fa-stack-exchange"></i> Post</button>
              </div>
              <div className="col-4">
                <button disabled className='w-100 btn btn-sm btn-outline-secondary expand'><i className="fas fa-image"></i> Picture</button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="border dark" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 45}}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="title"
                      placeholder="Title"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control dark"
                      id="url"
                      placeholder="Url"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary float-right"
                  >Create
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className='border' style={{height: '3rem', background: '#2B2B2D'}}>

                </div>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
