import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getNumberOfUsers } from '../../../services/userService';

interface Props {

}

interface State {
  numberOfUsers: number | null;
}

export default class CommunityInfo extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      numberOfUsers: null
    }
  }

  async componentDidMount(){
    const count = await getNumberOfUsers();
    this.setState({numberOfUsers: count});
  }

  render() {
    if(this.state.numberOfUsers){
      return (
        <React.Fragment>
          <div className="">
            <div className="border m-1 p-2">
              <div className="div p-2 pb-4">
                <span><i className="fas fa-users"></i> r/cct</span>
                <span id='users' className='float-right mr-2'>{this.state.numberOfUsers} users</span>
              </div>
              <div className="div p-1">
                <Link to={'/link_editor'}><button className='btn btn-sm btn-outline-primary p-1 w-100'>
                  Create Link
                </button>
                </Link>
              </div>
  
            </div>
          </div>
        </React.Fragment>
      )
    }else{
      return <div></div>
    }
    
  }
}
