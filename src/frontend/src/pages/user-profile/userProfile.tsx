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
import { getUserById } from '../../services/userService';
import CommentView from '../../components/comments/commentView/commentView';

interface Props {
  match: any
}

interface State {
  links: ILinkEntry[] | null;
  user: User | null;
  comments: any;
  showLinks: boolean;
  showComments: boolean;
}

class _UserProfilePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      user: null,
      links: null,
      comments: null,
      showLinks: false,
      showComments: false
    }
  }

  async componentDidMount() {
    await this._getData();
  }

  render() {
    if (this.state.links && this.state.user && this.state.comments) {
      return (
        <React.Fragment>
          <div className="row no-gutters">

            <div className='offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5 mb-3 d-block d-md-none'>
              <UserProfile
                username={this.state.user.username}
                firstName={this.state.user.firstName}
                lastName={this.state.user.lastName}
                profileImage={this.state.user.profileImage ? this.state.user.profileImage.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IVcs5QJhazFnScW3xeWTOCO9MI9xhDYothFRQkZgj9JTS5bjVQ'}
                bio={';asldkj asd;lfkja sdlfkj alk;fj al;dfj al;kdjf alk;dfj '}
              />
            </div>

            <div className='offset-sm-1 col-sm-10 offset-md-0 col-md-8 offset-lg-1 col-lg-7 offset-xl-2 col-xl-5'>
              <div>
                <h6
                  className='btn btn-outline-primary p-1 w-100'
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
                profileImage={this.state.user.profileImage ? this.state.user.profileImage.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IVcs5QJhazFnScW3xeWTOCO9MI9xhDYothFRQkZgj9JTS5bjVQ'}
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

    const userRes = await getAuthUser(getAuthToken()!);
    const logUser = await userRes.json();
    const user = await getUserById(logUser.id);

    const mappedLinks = user.links.map((link: any) => {
      return {
        id: link.id,
        title: link.title,
        url: link.url
      };
    });

    const comments = user.comments;

    setTimeout(() => {
      this.setState({ links: mappedLinks, user, comments });
    }, 200);

  }

  private _renderLoading() {
    let progresses = [];
    for (let i = 0; i < 6; i++) progresses.push(<LinkLoading key={i} />);
    return progresses;
  }

  private _renderLinks() {
    const visible = this.state.showLinks;
    return visible ?
      <ListView onUpdate={() => { }} items={this.state.links!} />
      :
      <div></div>
  }

  private _renderComments() {
    console.log(this.state.comments);

    const visible = this.state.showComments;
    return visible ?
      (this.state.comments.map((c: any, i: any) => {
        return <CommentView key={i} id={c.id} content={c.content} date={c.date} />
      }))
      :
      <div></div>
  }

}

export const UserProfilePage = withRouter(props => <_UserProfilePage {...props} />);
