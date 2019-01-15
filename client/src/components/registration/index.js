import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Registration extends Component {

  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        password_confirmation:'',
        user: {
       username:'',
       password:'',
       password_confirmation:''
     }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  handleChange = (e) => {
const{ name, value } = e.target;
this.setState(prevState => ({
  prevState,
  user: {
    ...prevState.user,
    [name]: value
  }
}));
}

  async handleSubmit(e) {
      e.preventDefault();
      try{
        const data ={
          user:this.state.user
        }

        const response = await axios.post(`${this.props.BASE_URL}/users`,data)
          alert('Registration succeeded: sign in');
        this.props.handleView('sign-in');
      }catch(e){
        console.log(e);
        alert('Registration failed: ' + e);
      }
    }




  render() {
    return (
      <div >
        <h1> Sign in to Bulletproof Pull list</h1>



              <Form
                onSubmit={this.handleSubmit}
                id="register form">
                  <h5> Register</h5>
                  <FormGroup>

                <Label className="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.user.username}
                  onChange={this.handleChange}
                  placeholder="username"
                  className='username'
                />

                <Label className="password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={this.state.user.password}
                  onChange={this.handleChange}
                  placeholder="password"
                  className='password'
                />



                <Label className="password_confirmation">Password confirmation</Label>
                <Input
                  type="text"
                  name="password_confirmation"
                  value={this.state.user.password_confirmation}
                  onChange={this.handleChange}
                  placeholder="password_confirmation"
                  className='password_confirmation'
                />




              </FormGroup>
              <Button className='submit-button' id='add-recipe-submit' outline color="info">Submit</Button>
              </Form>

      </div>
    );
  }
}

export default Registration;
