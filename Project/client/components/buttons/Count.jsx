import React from 'react';

export default class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.incrementCount = this.incrementCount.bind(this);
  }

 incrementCount() {
  this.setState({
    count: this.state.count + 1
  })
 }


render() {
  const counter = this.state.count;
  return(
      <div>
      <button onClick={this.incrementCount}> {counter} 🔥 </button>
      </div>
    )
  }
}

