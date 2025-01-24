import React from 'react';

// CSS
import "../styles/Hero.css";

// Boxicons
import "boxicons";

function Hero() {
  return (
    <div>
        <center>
            <img src="/avatar.jpg" className='avatar' alt="image" />
        </center>
        <div className="name">
            <p>Hi, I'm Artyom</p>
            <box-icon type='solid' name='badge-check' color="dodgerblue" size="28px"></box-icon>
        </div>
        <center>
            <p className="desc">Experienced web developer based in Ashgabat known for creating intuitive and engaging user experiences.</p>
        </center>
        <div className="links">
            <a href="#">Book a Call</a>
            <a href="#">Address</a>
        </div>
    </div>
  )
}

export default Hero