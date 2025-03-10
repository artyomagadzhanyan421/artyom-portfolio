import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

// CSS
import "../styles/Contact.css";

// Boxicons
import "boxicons";

function Contact() {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm("service_8o03v5p", "template_918opqp", formRef.current, "ZSiixRao-LhNSGWc8")
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    console.log(result.text);
                },
                (error) => {
                    alert("An error occurred. Please try again.");
                    console.log(error.text);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });

        e.target.reset();
    };

    return (
        <div className="Block" id="contact">
            <div className="myName">
                <center>
                    <img src="/avatar.jpg" className="avatar" alt="avatar" />
                </center>
                <div>
                    <div className="name">
                        <p>Artyom Agadzhanyan</p>
                        <box-icon type="solid" name="badge-check" size="22px" color="dodgerblue" />
                    </div>
                    <p className="job">Web-developer, designer</p>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/artyom-agadzhanyan-78a015352/" target="_blank">
                            <box-icon name="linkedin-square" type="logo" color="gray" size="19px" />
                        </a>
                        <a href="https://github.com/artyomagadzhanyan421" target="_blank">
                            <box-icon name="github" type="logo" color="gray" size="19px" />
                        </a>
                        <a href="https://x.com/artyom593" target="_blank">
                            <box-icon name="twitter" type="logo" color="gray" size="19px" />
                        </a>
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
                                <p className="blockDesc" style={{ maxWidth: "350px" }}>Fill out the form, to request for the project. I’ll respond within 24 hours.</p>
                            </center>
                        </div>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input type="email" name="user_email" placeholder="Email" required />
                            <input type="text" name="subject" placeholder="Subject" required />
                            <textarea name="message" placeholder="Message" required />
                            <button type="submit" className={isLoading ? "buttonDisabled" : ""} disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send message"}
                            </button>
                        </form>
                    </div>
                    <div className="location">
                        <div className="locationIcon">
                            <box-icon name="copyright" size="20px" color="grey"></box-icon>
                        </div>
                        <p>Copyright 2025. <span style={{ fontWeight: "bold" }}>All rights Reserved.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;