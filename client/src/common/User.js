import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class User extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/users/${this.props.match.params.id}`)
            .then(response => {
            console.log(response)
            this.setState(() => ({user: response.data}));
            })
    
        
    }

  render() {
    return (
      <div >
        <h1>{this.state.user.name}</h1>
        <p>id# : {this.state.user.id}</p>
        <NavLink to='/users'>Return</NavLink>
      </div>
    );
  }
}

export default User;