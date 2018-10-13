import React, { Component } from "react"
import base from "./base"
import { Router } from "@reach/router";
import Post from "./post"
import Home from "./home"
import CreatePost from "./createpost"
import EditPost from "./editpost"
import Header from "./header"
import Footer from "./footer"
import "./App.css"

class App extends Component  {

    state = {
        posts: {},
        user: null
    }

    componentDidMount() {
        this.postRef = base.syncState('/posts', {
          context: this,
          state: 'posts'
        });
      }
      
      componentWillUnmount() {
        base.removeBinding(this.postRef);
      }

      addPost = post => {
        const posts = { ...this.state.posts };
        const today=new Date();
        const year = today.getFullYear();
        const month = today.getMonth()+1;
        const day = today.getDate();
        const stringDate = today.toDateString();
        posts[`${Date.now()}`] = {...post, day, month, year, stringDate };
        this.setState({ posts });
      };

      updatePost = (key, updatedPost) => {
        const posts = { ...this.state.posts };
        posts[`${key}`] = updatedPost;
        this.setState({ posts });
      };

      dropPost = (key) =>{
        const posts = { ...this.state.posts };
        posts[`${key}`] = null;
        this.setState({ posts });
      }

    render()    {
        return(
        <div className="site">
            <Header />
            <Router>
                <Home path="/" posts={this.state.posts} />
                <Post path='/:slugname/:postId' posts={this.state.posts} dropPost={this.dropPost} />
                <CreatePost path='/admin/create' addPost={this.addPost} user={this.state.user} posts={this.state.posts} />
                <EditPost path='/admin/edit-post/:postId' updatePost={this.updatePost} user={this.state.user} posts={this.state.posts} />
            </Router>
            <Footer />
        </div>
    )
    }
}
export default App