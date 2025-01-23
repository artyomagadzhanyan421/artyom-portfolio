import React from 'react';

// CSS
import "../styles/Hero.css";

// Boxicons
import "boxicons";

function Hero() {
  return (
    <div className='Hero'>
      <center>
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_nVKPoGkfw44ICB715GPlzNDsmqZdlwewB1QGa9K4vD94o=s900-c-k-c0x00ffffff-no-rj" alt="image" />
      </center>
      <div className="name">
        <p>Hi, I'm Artyom</p>
        <box-icon type='solid' name='badge-check' color="dodgerblue" size="30px"></box-icon>
      </div>
      <center>
        <span className="about">Experienced web developer based in Ashgabat known for creating intuitive and engaging user experiences.</span>
      </center>
      <div className="heroLinks">
        <a href="#">
          <box-icon type='solid' name='phone' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
          <span>Book a Call</span>
        </a>
        <a href="mailto:artyom.agadzhanyan421@gmail.com">
          <box-icon type='solid' name='envelope' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
          <span>Email</span>
        </a>
      </div>
    </div>
  )
}

export default Hero