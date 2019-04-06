import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

interface Props {
  match: any
}

class _LinkViewPage extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        
        {this.props.match.params.link_id}
      </React.Fragment>
    )
  }
}

export const LinkViewPage = withRouter((props) => <_LinkViewPage {...props} />);

