import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='Navbar'>
        <nav>
            <a href="#" className="logo" style={{ display: "flex", width: "fit-content" }}>
                <img src="/logo.svg" alt="logo" />
            </a>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#">Workflow</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a href="mailto:artyom.agadzhanyan421@gmail.com" className='email'>artyom.agadzhanyan421@gmail.com</a>
        </nav>
    </div>
  )
}

export default Navbar