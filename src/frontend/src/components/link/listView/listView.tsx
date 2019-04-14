import React, { Component } from 'react'
import LinkEntry from '../linkEntry/linkEntry';
import { ILinkEntry } from '../../../interfaces/ILinkEntry';


interface Props {
  items: ILinkEntry[]
}

export default class ListView extends Component<Props> {

  constructor(props: Props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.items.map(link => {
          return (
            <div className="p-1" key={link.id}>
              <LinkEntry item={link} key={link.id} />
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
