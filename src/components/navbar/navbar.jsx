import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav>
            <h1>FLEXILOADS</h1>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Tariffs</li>
                <li>Contact</li>
                
            </ul>
        </nav>
    
    </div>
  )
}

export default Navbar