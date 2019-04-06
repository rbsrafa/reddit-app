import React, { Component } from 'react'
import { withRouter } from 'react-router';

interface Props {
  match: any
}

class _LinkEditorPage extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.match.params.link_id}
      </React.Fragment>
    )
  }
}

export const LinkEditorPage = withRouter(props => <_LinkEditorPage {...props} />);