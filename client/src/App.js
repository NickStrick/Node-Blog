import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Route } from 'react-router-dom';

import Users from './common/Users';
import User from './common/User';
import Posts from './common/Posts';

class App extends Component {
  state = {
    users: [],
    posts: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users')
    .then(response => {
      console.log(response)
      this.setState(() => ({users: response.data}));
    })
    .catch(err => console.log(err));
    axios.get('http://localhost:5000/posts')
    .then(response => {
      this.setState(() => ({posts: response.data}));
    })
    .catch(err => console.log(err));


  }

  render() { console.log(this.state.users)
    return (
      <div className="App">

        <Route exact path='/users' render={props => (
          <Users
          {...props}
          users={this.state.users}
          />
        )}
        />

        <Route path='/users/:id' render={props => (
          <User
          {...props}
          users={this.state.users}
          />
        )}
        />

        <Route path='/posts' render={props => (
          <Posts
          {...props}
          posts={this.state.posts}
          />
        )}
        />

      </div>
    );
  }
}

export default App;
