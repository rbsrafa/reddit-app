import React, { Component } from 'react'
import LinkEntry from '../../components/link/linkEntry/linkEntry';
import { ILinkEntry } from '../../interfaces/ILinkEntry';
import { getLinks } from '../../services/linkService';
import ListView from '../../components/link/listView/listView';

interface Props {

}

interface State {
  links: ILinkEntry[] | null;
}

export class HomePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      links: null
    }
  }

  async componentDidMount() {

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

      this.setState({ links: mappedLinks });
    }

  }

  render() {
    if (this.state.links) {
      return (
        <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
          <ListView items={this.state.links} />
        </div>
      );
    } else {
      return <div>loading...</div>
    }

  }
}
