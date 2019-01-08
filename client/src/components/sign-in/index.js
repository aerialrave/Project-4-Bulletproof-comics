import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Sign extends Component {

  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        formData: {
       username:'',
       password:''
     }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  handleChange = (e) => {
const{ name, value } = e.target;
this.setState(prevState => ({
  prevState,
  formData: {
    ...prevState.formData,
    [name]: value
  }
}));
}

  async handleSubmit(e) {
      e.preventDefault();
      try{

      }catch(e){
        console.log(e);
      }



    }




  render() {
    return (
      <div >
        <h1> Sign in to Bulletproof Pull list</h1>



              <Form
                onSubmit={this.handleSubmit}
                id="sign-in-form">
                  <h5> Sign in </h5>
                  <FormGroup>

                <Label className="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.formData.username}
                  onChange={this.handleChange}
                  placeholder="username"
                  className='username'
                />

                <Label className="password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={this.state.formData.password}
                  onChange={this.handleChange}
                  placeholder="password"
                  className='password'
                />



              </FormGroup>
              <Button class='submit-button' id='add-recipe-submit' outline color="info">Add Recipe</Button>
              </Form>

      </div>
    );
  }
}

export default Sign;
