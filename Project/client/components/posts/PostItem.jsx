import React from 'react';
import Count from '../buttons/Count.jsx';

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      localBody: this.props.body || '',
      modalOpen: false,
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditofContent = this.handleEditofContent.bind(this);
  }


  handleDeleteClick() {
    this.props.deletePost(this.props.id);
  }

  handleEditofContent(e) {
    let newContent = prompt('Update');
    this.props.handlePublish({
      id: this.props.id,
      body: newContent,
    })
    this.setState({ newContent })
  }
  render() {
    // if(this.state.modalOpen) {
    //   return (<div> one div </div>);
    // } else {
    //   return (<a onClick= {this.handleClick}> press me </a> )
    // }
    // <button className="button" onClick={this.handleEditofContent}> New shit </button>
    const body = this.props.body;
    return(
      <div>
          <div className="post_display"> {body}
          <button className="button" onClick={this.handleDeleteClick}> Delete </button>
          <Count />
        </div>
      </div>
    )
  }
}
