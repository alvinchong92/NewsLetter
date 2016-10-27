import React from 'react';
import Toggle from '../buttons/OnAndOff.jsx';

const propTypes = {
  sendPost: React.PropTypes.func,
};

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
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
    this.setState(updated)
    console.log(updated[name])
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendPost(this.state)
  }


  render() {
    return(
      <div>
        <form id="Post-Form" onSubmit= {this.handleSubmit}>
          <textarea id="textarea"
            type="text"
            placeholder="Hello!"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="submit" value="POST"/>
        </form>
        <Toggle />
      </div>
    )
  }
}

PostForm.propTypes = propTypes;
