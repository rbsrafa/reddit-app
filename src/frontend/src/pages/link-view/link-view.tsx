import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { getLinkForViewPage } from '../../services/linkService';
import LinkView from '../../components/link/linkView/linkView';
import { ILinkView } from '../../interfaces/ILinkView';

interface Props {
  match: any
}

interface State {
  item: ILinkView | null
}

class _LinkViewPage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      item: null
    }
  }

  async componentDidMount() {
    const res = await getLinkForViewPage(this.props.match.params.link_id);
    const item = await res.json();
    this.setState({ item });
  }

  render() {
    const item = this.state.item;
    console.log(item);
    if (item) {
      return (
        <React.Fragment>
          <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
            <LinkView item={this.state.item!} />
          </div>
        </React.Fragment>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

export const LinkViewPage = withRouter((props) => <_LinkViewPage {...props} />);

