import React from 'react';
import Bulletitle from './bulletproof-title.png'
export default function NavBar(props){
return(
<div id="navst">

<img src={Bulletitle} onClick={() =>props.handleView('welcome')}  />

<button onClick={() =>props.handleView('about')} >About</button>

<button onClick={() =>props.handleView('comics')}  >Comics</button>

<button onClick={() =>props.handleView('sign-in')}  >Sign-in</button>

<button onClick={() =>props.handleView('registration')}  >Register</button>

<button onClick={() =>props.handleView('user_page')}  >User Console</button>

</div>
  )
}
