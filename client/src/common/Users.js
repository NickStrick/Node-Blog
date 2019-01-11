import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Users extends Component {

  render() { console.log(this.props.users)
    return (
      <div>
        
        {this.props.users.map(users => (
          <NavLink to ={`/users/${users.id}`}>
            <h1>user# : {users.id}</h1>
            <h3>name : {users.name}</h3>
            
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Users;