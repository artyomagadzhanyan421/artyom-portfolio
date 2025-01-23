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
        <span className="about">A product designer with a proven track record of creating innovative and user-centric designs in the IT and software development sectors. Skilled in working in startups and adept at collaborating with cross-functional teams to deliver exceptional products on time and budget</span>
    </div>
  )
}

export default Hero