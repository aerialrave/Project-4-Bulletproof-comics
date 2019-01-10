import React from 'react';
import Bulletitle from './bulletproof-title.png'
export default function NavBar(props){
return(
<nav id="navst" className="navbar">
<div className="container">
  <div className="navbar-brand">
      <a className="navbar-item" onClick={() =>props.handleView('welcome')} > <img src={Bulletitle} /> </a>
    </div>

<div className="navbar-menu" id="navMenu">
  <div className="navbar-end">

    <div className="navbar-item had-dropdown is-hoverable">
      <a className="navbar-link">Menu</a>
      <div className="navbar-dropdown is-right">
<a className="navbar-item" onClick={() =>props.handleView('about')} >About</a>

<a className="navbar-item" onClick={() =>props.handleView('comics')}  >Comics</a>

<a className="navbar-item" onClick={() =>props.handleView('sign-in')}  >Sign-in</a>

<a className="navbar-item" onClick={() =>props.handleView('registration')}  >Register</a>

<a className="navbar-item" onClick={() =>props.handleView('user_page')}  >User Console</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}
