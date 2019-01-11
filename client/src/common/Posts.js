import React, { Component } from 'react';


class Posts extends Component {

  render() { console.log(this.props.posts)
    return (
      <div >
        
        {this.props.posts.map(post => (
          <div>
            <h1>post : {post.text}</h1>
            <h3>user# : {post.userId}</h3>
            <p>id# : {post.id}</p>    
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;