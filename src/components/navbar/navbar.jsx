import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav>
            <h1>FLEXILOADS</h1>
            <ul>
                <li>О НАС</li>
                <li>УСЛУГИ</li>
                <li>ТАРИФ</li>
                <li>КОНТАКТ</li>
                
            </ul>
        </nav>
    
    </div>
  )
}

export default Navbar