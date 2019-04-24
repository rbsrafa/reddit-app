import React, { Component } from 'react'
import './searchBar.css';

interface Props{
  query: Function
}

export default class SearchBar extends Component<Props> {

  constructor(props: Props){
    super(props);
  }
  
  private _onSearch(query: string){
    this.props.query(query);
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-group p-1">
          <span className="input-group-btn">
            <button id='searchButton' className="btn btn-outline-primary" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </span>
          <input onKeyUp={(e) => this._onSearch(e.currentTarget.value)} id='search-input' type="text" className="form-control pl-5" placeholder="Explore" />
        </div>
      </React.Fragment>
    )
  }
}
