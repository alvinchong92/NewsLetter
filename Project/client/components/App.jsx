import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import PostForm from './posts/PostForm.jsx';
import PostList from './posts/PostList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] }
    this.sendPost = this.sendPost.bind(this);
  }

  componentDidMount() {
    this.getCurrentPosts();
  }

  getCurrentPosts() {
    request.get('/api/posts')
           .then((response) => {
            console.log(response)
            const posts = response.body;
            this.setState({ posts })
           })
  }

  sendPost({ body }) {
    request.post('/api/posts')
           .send({ body })
           .then(() => {
            this.getCurrentPosts();
           })
  }


  render() {
    return(
      <div>
        <p> Something Something stack that cheese </p>
        <PostForm sendPost={this.sendPost} />
        <PostList posts={this.state.posts} />
      </div>
    )
  }
}


