import React, { Component } from 'react';


class Users extends Component {

  render() { console.log(this.props.users)
    return (
      <div >
        
        {this.props.users.map(users => (
          <div>
            <h1>user# : {users.id}</h1>
            <h3>name : {users.name}</h3>
            
          </div>
        ))}
      </div>
    );
  }
}

export default Users;