import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { ILinkEntry } from '../../interfaces/ILinkEntry';
import { getLinkById, updateLink } from '../../services/linkService';
import LinkEditor from '../../components/link/linkEditor/linkEditor';

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

  private async _onUpdate(id: number, options: any){
    console.log('options: ', options);
    
    const res = await updateLink(id, options);    
    const item = await res.json();
    console.log('link page: ', item);
    this.setState({item});
  }

  async componentDidMount(){
    const res = await getLinkById(this.props.match.params.link_id);
    const item = await res.json();
    this.setState({item});
  }

  render() {
    const item = this.state.item;
    if(item){
      return (
        <React.Fragment>
          <LinkEditor item={item} onUpdate={((id: number, options: any) => {this._onUpdate(id, options)})}/>
        </React.Fragment>
      )
    }else{
      return <div>Loading</div>
    }

    
  }
}

export const LinkEditorPage = withRouter(props => <_LinkEditorPage {...props} />);