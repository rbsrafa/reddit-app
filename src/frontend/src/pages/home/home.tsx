import React, { Component } from 'react'
import { ILinkEntry } from '../../interfaces/ILinkEntry';
import { getLinks } from '../../services/linkService';
import ListView from '../../components/link/listView/listView';
import LinkLoading from '../../components/link/linkLoading/linkLoading';
import SearchBar from '../../components/searchBar/searchBar';
import CommunityInfo from '../../components/community/info/communityInfo';

interface Props { }

interface State {
  links: ILinkEntry[] | null;
  query: string;
}

export class HomePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      links: null,
      query: ''
    }
  }

  async componentDidMount() {
    this._getLinksData();
  }

  render() {
    if (this.state.links) {
      const filteredLinks = this.state.links.filter(link => {
        return link.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
      });
      return (
        <React.Fragment>
          <div className="row no-gutters">
            <div className="offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5">
              <div >
                <SearchBar query={(query: string) => this.setState({query})} />
              </div>
              <div>
                <ListView items={filteredLinks} />
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3  d-none d-md-block">
              <CommunityInfo />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5">
          {this._renderLoading()}
        </div>
      );
    }
  }

  private async _getLinksData() {
    if (!this.state.links) {
      const res = await getLinks();
      const links = await res.json();

      const mappedLinks = links.links.map((link: any) => {
        return {
          id: link.id,
          title: link.title,
          url: link.url,
          commentCount: link.comments.length,
          date: link.createdAt.slice(0, 10),
          username: link.user.username,
          userId: link.user.id,
          score: link.votes.length
        };
      });
      setTimeout(() => {
        this.setState({ links: mappedLinks });
      }, 200);
    }
  }

  private _renderLoading() {
    let progresses = [];
    for (let i = 0; i < 6; i++) progresses.push(<LinkLoading key={i}/>);
    return progresses;
  }
}
