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
                        <img src="/avatar.jpg" className='avatar' alt="image" />
                        <div>
                            <div className='name'>
                                <p>Artyom Agadzhanyan</p>
                                <box-icon type='solid' name='badge-check' size="22px" color="dodgerblue"></box-icon>
                            </div>
                            <p className="job">Web-developer, designer</p>
                            <div className="socials">
                                <a href="#" target='_blank'><box-icon name='linkedin-square' type='logo' color="gray" size="19px"></box-icon></a>
                                <a href="https://github.com/artyomagadzhanyan421" target='_blank'><box-icon name='github' type='logo' color="gray" size="19px"></box-icon></a>
                                <a href="#" target='_blank'><box-icon name='twitter' type='logo' color="gray" size="19px"></box-icon></a>
                            </div>
                        </div>
                    </div>
                    <p className="heading">I create websites that work as hard as you do</p>
                    <center>
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
                    </center>
                    <div className="links">
                        <a href="https://calendar.app.google/h4ykq5kbvESpQCQs9" target='_blank' className='link'>
                            <span>Book a Call</span>
                            <div className="linkIcon">
                                <box-icon name='right-arrow-alt' color="blue"></box-icon>
                            </div>
                        </a>
                        <a href="#works" className='link grey'>
                            <span>My works</span>
                        </a>
                    </div>
                </div>
                <div className="location">
                    <div className='locationIcon'><box-icon name='map' size="20px" color="grey"></box-icon></div>
                    <p>Located in <span style={{ fontWeight: "bold" }}>Ashgabat</span>, available worldwide.</p>
                </div>
            </div>
        </div>
    )
}

export default Card