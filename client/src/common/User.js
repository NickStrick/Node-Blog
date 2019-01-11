import React, { Component } from 'react';


class User extends Component {
    state = {
        user: { name:'b'}
    }

    componentDidMount(){
        let id =this.props.match.params.id;
        console.log(id)
        console.log(this.props.users);
    
        
    }

  render() { console.log(this.props.users);
    return (
      <div >
        <h1>{this.state.user.name}</h1>
        
      </div>
    );
  }
}

export default User;