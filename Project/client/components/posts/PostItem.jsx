import React from 'react';

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
    console.log(this.props)
    this.props.deletePost(this.props.id);
  }

  handleEditofContent(e) {
    let newContent = prompt('Update');
    console.log("hit");
    console.log(this.props)
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
    const body = this.props.body;
    return(
      <div>
          <div className="post_display"> {body}
          <button className="button" onClick={this.handleDeleteClick}> Delete </button>
          <button className="button" onClick={this.handleEditofContent}> New shit </button>
        </div>
      </div>
    )
  }
}
