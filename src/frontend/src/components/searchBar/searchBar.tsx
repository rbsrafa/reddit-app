import React, { Component } from 'react'
import './searchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-group p-1">
          <span className="input-group-btn">
            <button id='searchButton' className="btn btn-outline-primary" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </span>
          <input id='search-input' type="text" className="form-control pl-5" placeholder="Explore" />
        </div>
      </React.Fragment>
    )
  }
}
