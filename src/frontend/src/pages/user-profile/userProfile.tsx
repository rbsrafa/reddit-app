import React, { Component } from 'react'
import { withRouter } from 'react-router';
import LinkLoading from '../../components/link/linkLoading/linkLoading';
import ListView from '../../components/link/listView/listView';
import { ILinkEntry } from '../../interfaces/ILinkEntry';
import { getLinks } from '../../services/linkService';
import UserProfile from '../../components/user/userCard/userCard';
import { User } from '../../interfaces/User';
import { getAuthUser } from '../../services/authService';
import { getAuthToken } from '../../components/with_auth/with_auth';

interface Props {
  match: any
}

interface State {
  links: ILinkEntry[] | null;
  user: User | null;
  showLinks: boolean;
  showComments: boolean;
}

class _UserProfilePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      user: null,
      links: null,
      showLinks: false,
      showComments: false
    }
  }

  async componentDidMount() {
    await this._getData();
  }

  render() {
    if (this.state.links && this.state.user) {
      return (
        <React.Fragment>
          <div className="row no-gutters">
            <div className='offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5'>
              <div>
                <h6
                  className='btn btn-outline-primary p-1 w-100 '
                  onClick={() => this.setState({ showLinks: !this.state.showLinks })}
                >Show my links
                </h6>
                {this._renderLinks()}
              </div>
              <div>
                <h6
                  className='btn btn-outline-primary p-1 w-100 mt-2'
                  onClick={() => this.setState({ showComments: !this.state.showComments })}
                >Show my comments
                </h6>
                {this._renderComments()}
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 d-none d-md-block">
              <UserProfile 
                username={this.state.user.username} 
                firstName={this.state.user.firstName}
                lastName={this.state.user.lastName}
                profileImage={this.state.user.profileImage!.url} 
                bio={';asldkj asd;lfkja sdlfkj alk;fj al;dfj al;kdjf alk;dfj '}
              />
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

  private async _getData() {
    if (!this.state.links) {
      const linkRes = await getLinks();
      const links = await linkRes.json();

      const mappedLinks = links.links.map((link: any) => {
        return {
          id: link.id,
          title: link.title,
          url: link.url
        };
      });

      const userRes = await getAuthUser(getAuthToken()!);
      const user = await userRes.json();

      setTimeout(() => {
        this.setState({ links: mappedLinks, user });
      }, 200);
    }
  }

  private _renderLoading() {
    let progresses = [];
    for (let i = 0; i < 6; i++) progresses.push(<LinkLoading key={i} />);
    return progresses;
  }

  private _renderLinks() {
    const visible = this.state.showLinks;
    return visible ?
      <ListView items={this.state.links!} />
      :
      <div></div>
  }

  private _renderComments() {
    const visible = this.state.showComments;
    return visible ?
      <ListView items={this.state.links!} />
      :
      <div></div>
  }

}

export const UserProfilePage = withRouter(props => <_UserProfilePage {...props} />);
