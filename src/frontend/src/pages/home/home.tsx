import React, { Component } from 'react'
import LinkEntry from '../../components/link/link-entry/linkEntry';
import { Link } from '../../interfaces/Link';
import { getLinks } from '../../services/linkService';

interface Props {

}

interface State {
  links: Link[] | null;
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
      return this.state.links.map((l, i) => {
        return <LinkEntry link={this.state.links![i]} />
      });
    } else {
      return <div>loading...</div>
    }

  }
}
