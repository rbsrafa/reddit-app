import React, { Component } from 'react'
import { withRouter } from 'react-router';

interface Props {
  match: any
}

class _UserProfilePage extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.match.params.user_id}
      </React.Fragment>
    )
  }

}

export const UserProfilePage = withRouter(props => <_UserProfilePage {...props} />);