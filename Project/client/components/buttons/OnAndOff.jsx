import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    isToggledOn: true,
  }
  this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    this.setState( prevState => ({
      isToggledOn: !prevState.isToggledOn }))
  }

  render() {
    return(
      <div>
        <button id="fireButton" onClick= {this.handleClick}> {this.state.isToggledOn ? 'ON 🔥' : '💩'} </button>
        {console.log(this.state.isToggledOn)}
      </div>
    )
  }
}
