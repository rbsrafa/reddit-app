import React, { Component } from 'react'
import './createLink.css';
import { createLink } from '../../../services/linkService';
import * as joi from 'joi';
import { withRouter } from 'react-router';

interface State {
  link: {
    url: string | null;
    title: string | null;
  },
  error: any;
}

interface Props {
  history: any
}

class _CreateLink extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      link: {
        url: 'http://',
        title: null
      },
      error: null
    }
  }

  private async _handleCreate(){
    const res = await createLink(this.state.link);
    const json = await res.json();
    if(json.error) this.setState({error: json.error});
    else this.props.history.push('/');
  }

  private _updateState(e: any){
    const link = this.state.link;
    (link as any)[e.target.id] = e.target.value
    this.setState({link});
  }

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
                {this.state.error ? this.state.error.map((e:any, id:any) => <div className='alert alert-secondary p-1 text-danger' key={id}>{e.message}</div>):<div></div>}
                  <div className="form-group">
                    <input
                      onKeyUp={(e) => this._updateState(e)}
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="title"
                      placeholder="Title"
                      autoComplete="off"
                    />
                  </div>
                  {this._renderTitleValidation()}
                  <div className="form-group">
                    <textarea
                      onKeyUp={(e) => this._updateState(e)}
                      className="form-control dark"
                      defaultValue='http://'
                      id="url"
                      placeholder="Url"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  {this._renderUrlValidation()}
                  <button
                    onClick={() => this._handleCreate()}
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

  private _renderTitleValidation(){
    const validation = joi.validate(
      {title: this.state.link.title}, 
      {title: joi.string().required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.link.title && this.state.link.title.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

  private _renderUrlValidation(){
    const validation = joi.validate(
      {url: this.state.link.url}, 
      {url: joi.string().uri().required()},
      { abortEarly: false }
    );

    if(validation.error && this.state.link.url && this.state.link.url.length > 0){
      return <div>{validation.error.details.map((d, i) => <div className='small alert alert-sm' key={i}>{d.message}</div>)}</div>
    }
  }

}

export const CreateLink = withRouter(props => <_CreateLink {...props}/>);