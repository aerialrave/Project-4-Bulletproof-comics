import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {

  constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        password_confirmation:''
        formData: {
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
                id="register form">
                  <h5> Register</h5>
                  <FormGroup>

                <Label className="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.formData.username}
                  onChange={this.handleChange}
                  placeholder="username"
                  className='username'
                />

                <Label className="password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={this.formData.password}
                  onChange={props.handleChange}
                  placeholder="password"
                  className='password'
                />

                </Input>

                <Label className="password_confirmation">Password confirmation</Label>
                <Input
                  type="text"
                  name="password_confirmation"
                  value={this.formData.password_confirmation}
                  onChange={props.handleChange}
                  placeholder="password_confirmation"
                  className='password_confirmation'
                />

                </Input>


              </FormGroup>
              <Button class='submit-button' id='add-recipe-submit' outline color="info">Add Recipe</Button>
              </Form>

      </div>
    );
  }
}

export default Registration;
