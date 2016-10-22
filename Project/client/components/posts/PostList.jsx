import React from 'react';

const propTypes = {
  posts: React.PropTypes.array,
};

export default class PostList extends React.Component {
  render() {
    return(
      <div>
        <h2> My posts </h2>
        {this.props.posts.map((post) => post.body).join(` & `)}
      </div>
    )
  }
}

PostList.propTypes = propTypes;
