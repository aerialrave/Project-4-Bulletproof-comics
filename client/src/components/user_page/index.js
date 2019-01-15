import React, { Component } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class User_Page extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
    this.getUser = this.getUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

logout(){
localStorage.removeItem('Token');

}

setUser(user){
  this.setState({
    user:user
  })
}




  async getUser(){
      try{
        const jwt = localStorage.getItem('Token');
        const token = decode(localStorage.getItem('Token'));
        const refresh = await axios.get(`${this.props.BASE_URL}/users/${token.sub}`)
          this.setUser(refresh.data);
      }catch(e){
        console.log(e)
      }
  }


componentDidMount(){
 this.getUser();

}


render(){
  return(
    <div>

      <h1>{this.state.user.username}</h1>
      <button onClick={()=>{
        this.logout();
        this.props.handleView('sign-in');

      }}>Logout</button>


      {this.state.user.posts && this.state.user.posts.map(posts=>
      <div key={posts.id}>
        <p>{posts.id}</p>
      <p>{posts.body} </p>
    </div>)}



    </div>

  )
  }
}
export default User_Page;
