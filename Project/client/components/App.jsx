 import React from 'react';
 import request from 'superagent';
 import cookie from 'react-cookie';
 import UserForm from './users/UserForm.jsx';
 import PostList from './posts/PostList.jsx';
 import PostForm from './posts/PostForm.jsx';

 const propTypes = {};

 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = { posts: [] };
     this.logIn = this.logIn.bind(this);
     this.signUp = this.signUp.bind(this);
     this.signOut = this.signOut.bind(this);
     this.sendPost = this.sendPost.bind(this);
   }
   componentDidMount() {
     this.updateAuth();
     if (cookie.load('token')) {
       this.getCurrentUserPosts();
     }
   }
   getCurrentUserPosts() {
     request.get('/api/posts')
            .then((response) => {
              const posts = response.body;
              this.setState({ posts });
            })
            .catch(() => {
              this.updateAuth();
            });
   }
   sendPost({ body }) {
     request.post('/api/post')
           .send({ body })
           .then(() => {
              this.getCurrentUserPosts();
            });
   }
   signOut() {
     request.post('/api/signout')
            .then(() => this.updateAuth());
   }
   updateAuth() {
     this.setState({
       token: cookie.load('token'),
     });
   }
   logIn(userDetails) {
     request.post('/api/login')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
            this.getCurrentUserPosts();
          });
   }
   signUp(userDetails) {
    console.log(userDetails)
     request.post('/api/signup')
           .send(userDetails)
           .then(() => {
             this.updateAuth();
             this.getCurrentUserPosts();
           });
   }
   render() {
     let userDisplayElement;
     if (this.state.token) {
       userDisplayElement = (
         <div>
           <button onClick={this.signOut} >Log-Out!</button>
           <PostForm sendPost={this.sendPosts} />
           <PostList posts={this.state.posts} />
         </div>
       );
     } else {
       userDisplayElement = (
         <div>
           <UserForm handleSubmit={this.signUp} buttonText="Sign-Up" />
           <UserForm handleSubmit={this.logIn} buttonText="Log-In" />
         </div>
       );
     }
     return (
       <div>
         {userDisplayElement}
       </div>
     );
   }
 }

 App.propTypes = propTypes;

 export default App;
