import React, { useState } from 'react'

const Navbar = () => {
   
  return (
    <div id="navbar_container">
       <nav id="link_box">
             <a>Login</a>
             <a>Sign Up</a>
             <a>Classes</a>
             <a>About</a>
       </nav>
       <h1 id="title">CDL Academy</h1>
       <h2 id="city_state">Fort Worth<br /><hr className="divider"/> Texas</h2>
    </div>
  )
}

export default Navbar;