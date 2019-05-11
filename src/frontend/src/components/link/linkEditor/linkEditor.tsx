import React, { Component } from 'react'
import './linkEditor.css';
import { ILinkEntry } from '../../../interfaces/ILinkEntry';

interface Props {
  item: ILinkEntry;
  onUpdate: Function;
}

interface State {
  editTitle: boolean;
  editLink: boolean;
  title: string;
  link: string;
}

export default class LinkEditor extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      editLink: false,
      editTitle: false,
      title: this.props.item.title,
      link: this.props.item.url
    }
  }

  private _handleSave() {    
    this.setState({ editTitle: false, editLink: false });
    this.props.onUpdate(this.props.item.id, {title: this.state.title, link: this.state.link});
  }

  private _handleLinkCancel() {
    this.setState({ editLink: !this.state.editLink });
  }

  private _handleTitleCancel() {
    this.setState({ editTitle: !this.state.editTitle });
  }

  private _updateTitle(e: any){
    const title = e.target.value;
    this.setState({title});
  }

  private _updateLink(e: any){
    const link = e.target.value;
    this.setState({link});
  }

  render() {
    const item = this.props.item;
    console.log(this.state.link);
    
    return (
      <React.Fragment>
        <div className="row">
          <div className="offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
            <div className=" bg-dark p-2 border rounded">

              <div>
                {this.state.editTitle ? <div></div> : (
                  <h5>{this.props.item.title}<button onClick={(e) => this.setState({ editTitle: !this.state.editTitle })} className='btn btn-sm btn-outline-secondary ml-2'>edit</button></h5>
                )}
                {this.state.editTitle ? (
                  <div className="form-group">
                    <input
                      onChange={(e) => {}}
                      onKeyUp={(e) => this._updateTitle(e)}
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="emailHelp"
                      placeholder={this.state.title}
                    />
                    <button onClick={() => this._handleSave()} className='mt-2 btn btn-sm btn-outline-primary'>Save</button>
                    <button onClick={() => this._handleTitleCancel()} className='mt-2 ml-2 btn btn-sm btn-outline-warning'>Cancel</button>
                  </div>
                ) : <div></div>}

                {this.state.editLink ? <div></div> : (<div>
                  <a ><small>{this.props.item.url.length > 40 ? `${this.props.item.url.slice(0, 40)}...` : this.props.item.url}</small></a><button onClick={() => this.setState({editLink: !this.state.editLink})} className='ml-2 btn btn-sm btn-outline-secondary'>edit</button><br />                
                </div>)}
                
                {this.state.editLink ? (
                  <div className="form-group">
                    <input
                      onChange={() => {}}
                      onKeyUp={(e) => this._updateLink(e)}
                      type="text"
                      className="form-control black-input"
                      id="link"
                      aria-describedby="emailHelp"
                      placeholder={this.state.link}
                    />
                    <button onClick={() => this._handleSave()} className='mt-2 btn btn-sm btn-outline-primary'>Save</button>
                    <button onClick={() => this._handleLinkCancel()} className='mt-2 ml-2 btn btn-sm btn-outline-warning'>Cancel</button>
                  </div>
                ) : <div></div>}

              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

