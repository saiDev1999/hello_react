import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserNameContext } from '../../App'

function Header() {
    const navLink={margin:15,textDecoration:"none",color:"black"}

   const userName =useContext(UserNameContext)

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link style={navLink}  to="/"  >Home</Link>

      
        </li>
        <li className="nav-item">
        <Link style={navLink} to="/about"  >About</Link>
        
        </li>
        <li className="nav-item">
        <Link style={navLink} to="/setting"  >Settings</Link>
         
        </li>

        <li className="nav-item">
      {userName}
         
        </li>
       
      </ul>
    </div>
  </nav>
  
  

  )
}

export default Header