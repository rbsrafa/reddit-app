import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { ILinkEntry } from '../../interfaces/ILinkEntry';
import { getLinkById } from '../../services/linkService';

interface Props {
  match: any
}

interface State {
  item: ILinkEntry | null
}

class _LinkEditorPage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      item: null
    }
  }

  async componentDidMount(){
    const res = await getLinkById(this.props.match.params.link_id);
    const item = await res.json();
    this.setState({item});
    console.log(this.state.item);
  }

  render() {
    const item = this.state.item;
    if(item){
      return (
        <React.Fragment>
          {item!.title}
        </React.Fragment>
      )
    }else{
      return <div>Loading</div>
    }

    
  }
}

export const LinkEditorPage = withRouter(props => <_LinkEditorPage {...props} />);