import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './home/home';
import { LinkViewPage } from './link-view/link-view';
import { LinkEditorPage } from './link-editor/link-editor';
import { CreateLinkPage } from './link-create/link-create';
import { UserProfilePage } from './user-profile/user-profile';
import { SigninPage } from './signin/signin';
import { SignupPage } from './signup/signup';
import Header from '../components/header/header';

export default class Layout extends Component {

  render() {
    return (
      <React.Fragment>
        <Header token={null}/>
        <Switch>
          <React.Fragment>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/link/:link_id' component={LinkViewPage}/>
            <Route exact path='/link_editor/:link_id' component={LinkEditorPage}/>
            <Route exact path='/link_editor' component={CreateLinkPage}/>
            <Route exact path='/user/:user_id' component={UserProfilePage}/>
            <Route exact path='/sign_in' component={SigninPage}/>
            <Route exact path='/sign_up' component={SignupPage}/>
          </React.Fragment>
        </Switch>
      </React.Fragment>
    )
  }

}
