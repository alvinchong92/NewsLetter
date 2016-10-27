import React from 'react';
import Toggle from '../buttons/OnAndOff.jsx';

const propTypes = {
  sendPost: React.PropTypes.func,
};

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      wordcount: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    let something = updated[name].split(' ').length -1;
    this.setState(updated)
    this.setState({
      wordcount: something
    })
    console.log(something)
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.sendPost(this.state)
    this.setState({
      body: ''
    })
    this.setState({
      wordcount: 0
    })
  }


  render() {
    return(
      <div>
        <form id="Post-Form" onSubmit= {this.handleSubmit}>
          <textarea id="textarea"
            type="text"
            placeholder="Please enter a message."
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="submit" value="POST"/>
        </form>
        <div id="wordCounter">
        <h3> WordCounter: {this.state.wordcount} </h3>
        </div>
        <Toggle />
      </div>
    )
  }
}

PostForm.propTypes = propTypes;
