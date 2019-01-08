import React, { Component } from 'react';
import axios from 'axios';

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
                onSubmit={props.submitRecipe}
                id="add-recipe-form">
                  <h5> Add Recipe </h5>
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
                  value={this.formData.username}
                  onChange={props.handleChange}
                  placeholder="password"
                  className='password'
                />

                </Input>

              </FormGroup>
              <Button class='submit-button' id='add-recipe-submit' outline color="info">Add Recipe</Button>
              </Form>

      </div>
    );
  }
}

export default Sign;
