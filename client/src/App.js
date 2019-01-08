import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import pages for test of site
import Welcome from './components/welcome';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Sign from './components/sign-in';
import Comics from './components/comics';
import Registration from './components/registration';



const BASE_URL = ''

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      currentview:'',
      fetchstring: '',
      usr:[],
      loggedin: false
    }
    this.handleView = this.handleView.bind(this);
    this.viewControl = this.viewControl.bind(this);
    this.handleuser = this.handleuser.bind(this);
  }

//view functions
  handleView(view){
this.setState(
  {currentview: view}
    )}

viewControl(){
const view = this.state.currentview;
switch(view) {

  case 'sign-in': return <Sign usr={this.state.usr} />


  case 'comics': return <Comics usr={this.state.usr} />


  case 'registration': return <Registration  />


  //case 'user_page': return <User_page usr={this.state.usr} />


    default: return <Welcome />

    }

}

handleuser(user){
  this.setState(
      {usr:user}
  )}



  render() {
    return (
      <div className="App">
          <NavBar handleView={this.handleView} />
          {this.viewControl()}


      </div>
    );
  }
}

export default App;
