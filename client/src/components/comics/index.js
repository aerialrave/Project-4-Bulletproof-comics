import React, { Component } from 'react';
import axios from 'axios';

class Comics extends Component {

  constructor(props){
    super(props);
    this.state={
        comic:[],
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




      </div>
    );
  }
}

export default Comics;
