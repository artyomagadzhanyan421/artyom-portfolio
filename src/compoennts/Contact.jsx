import React from 'react';

// CSS
import "../styles/Contact.css";

// Boxicons
import "boxicons";

function Contact() {
    return (
        <div className='Block' id='contact'>
            <div className="myName">
                <center>
                    <img src="/avatar.jpg" className='avatar' alt="image" />
                </center>
                <div>
                    <div className='name'>
                        <p>Artyom Agadzhanyan</p>
                        <box-icon type='solid' name='badge-check' size="22px" color="dodgerblue"></box-icon>
                    </div>
                    <p className="job">Web-designer, developer</p>
                    <div className="socials">
                        <a href="#" target='_blank'><box-icon name='linkedin-square' type='logo' color="gray" size="19px"></box-icon></a>
                        <a href="https://github.com/artyomagadzhanyan421" target='_blank'><box-icon name='github' type='logo' color="gray" size="19px"></box-icon></a>
                        <a href="#" target='_blank'><box-icon name='twitter' type='logo' color="gray" size="19px"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="cardOverlay noneTransformTwo">
                    <div className="cardMain noneTop">
                        <div>
                            <center>
                                <p className="blockHeading">Contact</p>
                            </center>
                            <center>
                                <p className="blockDesc" style={{ maxWidth: "320px" }}>
                                    Fill out the form, or reach out directly. I’ll respond within 24 hours.
                                </p>
                            </center>
                        </div>
                        <form>
                            <input type="email" placeholder='Email' required />
                            <input type="text" placeholder='Subject' required />
                            <textarea placeholder='Message' required></textarea>
                            <button>Send message</button>
                        </form>
                    </div>
                    <div className="location">
                        <box-icon name='copyright' size="20px" color="grey"></box-icon>
                        <p>Copyright 2025. <span style={{ fontWeight: "bold" }}>All rights Reserved.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact