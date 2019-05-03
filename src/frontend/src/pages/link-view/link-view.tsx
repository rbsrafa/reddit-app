import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { getLinkForViewPage, upvoteLink, downvoteLink } from '../../services/linkService';
import LinkView from '../../components/link/linkView/linkView';
import { ILinkView } from '../../interfaces/ILinkView';
import LinkLoading from '../../components/link/linkLoading/linkLoading';

interface Props {
  match: any
}

interface State {
  item: ILinkView | null
  comment: {
    content: string | null
  },
  voted: number | null
}

class _LinkViewPage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      item: null,
      voted: null,
      comment: {
        content: null
      }
    }
  }

  async componentDidMount() {
    await this._getLinkData();
  }

  private async _onVoteUpdate(voted: number, id: number){
    if(voted === 1) await upvoteLink(id);
    else await downvoteLink(id);
    await this._getLinkData();
  }

  private async _onCommentCreated(){
    await this._getLinkData();    
  }

  render() {
    const item = this.state.item;
    if (item) {
      return (
        <React.Fragment>
          <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
            <LinkView item={this.state.item!} onUpdate={(voted:any, id:any) => this._onVoteUpdate(voted, id)} onCommentCreated={() => this._onCommentCreated()}/>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
          <LinkLoading />
        </div>
      )
    }
  }

  private async _getLinkData(){
    const res = await getLinkForViewPage(this.props.match.params.link_id);
    const item = await res.json();
    this.setState({ item });
  }

}

export const LinkViewPage = withRouter((props) => <_LinkViewPage {...props} />);

