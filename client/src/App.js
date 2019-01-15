import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import pages for test of site
import Welcome from './components/welcome';
import NavBar from './components/navbar';
import About from './components/about';
import Footer from './components/footer';
import Sign from './components/sign-in';
import Comics from './components/comics';
import Comics_Posts from './components/comic_posts';
import Registration from './components/registration';
import User_Page from './components/user_page';


const BASE_URL = '/api'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      currentview:'',
      fetchstring: '',
      usr:{},
      selected:{},
      loggedin: false
    }
    this.handleView = this.handleView.bind(this);
    this.viewControl = this.viewControl.bind(this);
    this.handleuser = this.handleuser.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

//view functions
  handleView(view){
this.setState(
  {currentview: view}
    )}

viewControl(){
const view = this.state.currentview;
switch(view) {
  // add tokens where needed for comics_posts and probably user_page

case 'about': return <About usr={this.state.usr}  handleusr={this.handleusr} handleView={this.handleView} BASE_URL={BASE_URL} />

  case 'sign-in': return <Sign usr={this.state.usr}  handleusr={this.handleusr} handleView={this.handleView} BASE_URL={BASE_URL} />

  case 'comics': return <Comics usr={this.state.usr} BASE_URL={BASE_URL} handleView={this.handleView} handleSelect={this.handleSelect} />

  case 'registration': return <Registration handleusr={this.handleusr} handleView={this.handleView}  BASE_URL={BASE_URL} />

  case 'comics_posts': return <Comics_Posts selected={this.state.selected} handleSelect={this.handleSelect} BASE_URL={BASE_URL}  />

  case 'user_page': return <User_Page usr={this.state.usr} BASE_URL={BASE_URL} handleView={this.handleView}  />

    default: return <Welcome />
    }

}

handleuser(user){
  this.setState(
      {usr:user}
  )}

handleSelect(select){
  this.setState(
    {selected:select}
  )
}


  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar handleView={this.handleView} />
          {this.viewControl()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
