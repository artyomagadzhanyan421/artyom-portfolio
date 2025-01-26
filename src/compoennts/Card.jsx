import React from 'react';

// CSS
import "../styles/Card.css";

// Boxicons 
import "boxicons";

function Card() {
    const lines = {
        display: "flex",
        gap: "7px"
    }

    const line = {
        background: "rgb(158, 243, 74)",
        width: "100%",
        height: "4px",
        borderRadius: "50px"
    }

    const line2 = {
        background: "rgb(239, 239, 239)",
        width: "100%",
        height: "4px",
        borderRadius: "50px"
    }

    return (
        <div className='Card'>
            <div className="card-block blue"></div>
            <div className="card-block blackOne"></div>
            <div className="card-block blackTwo"></div>
            <div className="cardOverlay">
                <center>
                    <div className="cardWhole"></div>
                </center>
                <div className="cardMain">
                    <div style={lines}>
                        <div style={line}></div>
                        <div style={line}></div>
                        <div style={line2}></div>
                    </div>
                    <div className="myName">
                        <img src="/avatar.jpg" alt="image" />
                        <div>
                            <div className='name'>
                                <p>Hi, I'm Artyom!</p>
                                <box-icon type='solid' name='badge-check' size="22px" color="dodgerblue"></box-icon>
                            </div>
                            <p className="job">Web developer</p>
                            <div className="socials">
                                <a href="#" target='_blank' style={{ display: "flex" }}><box-icon name='linkedin-square' type='logo' color="darkgray" size="22px"></box-icon></a>
                                <a href="https://github.com/artyomagadzhanyan421" target='_blank' style={{ display: "flex" }}><box-icon name='github' type='logo' color="darkgray" size="22px"></box-icon></a>
                                <a href="#" target='_blank' style={{ display: "flex" }}><box-icon name='twitter' type='logo' color="darkgray" size="22px"></box-icon></a>
                            </div>
                        </div>
                    </div>
                    <p className="heading">I create websites that work as hard as you do</p>
                    <div>
                        <div className="rate">
                            <img src="/star.png" alt="image" />
                            <img src="/star.png" alt="image" />
                            <img src="/star.png" alt="image" />
                            <img src="/star.png" alt="image" />
                            <img src="/star.png" alt="image" />
                            <span>50+ projects</span>
                        </div>
                        <p className='desc'>I build websites that solve problems, inspire action, and drive success.</p>
                    </div>
                    <div className="links">
                        <a href="#" className='link'>
                            <span>Get Started</span>
                            <div className="linkIcon">
                                <box-icon name='right-arrow-alt' color="blue"></box-icon>
                            </div>
                        </a>
                        <a href="#" className='link grey'>
                            <span>My works</span>
                        </a>
                    </div>
                </div>
                <div className="location">
                    <box-icon name='map' size="20px" color="grey"></box-icon>
                    <p>Located in <span style={{ fontWeight: "bold" }}>Ashgabat</span>, available worldwide.</p>
                </div>
            </div>
        </div>
    )
}

export default Card