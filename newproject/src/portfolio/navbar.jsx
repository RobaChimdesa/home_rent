import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className='containall'>
     <h1 style={{paddingTop:'200px',paddingLeft:'200px'}}>WELL COME TO MY SITE</h1>
    <div className="me">
    <h2>HI! I AM ROBA</h2>
     <h2>WEB </h2><h2 style={{color:'red'}}>DEVELOPER</h2>
     <h3>you can see my projects</h3>
    </div>

    </div>
    </>
  )
}

export default Navbar