import React from 'react';

// CSS
import "../styles/Workflow.css";

// Boxicons
import "boxicons";

function Workflow() {
    return (
        <div className='Workflow'>
            <div className="cardOverlay noneTransformTwo">
                <div className="flow">
                    <span className='flowNum'>4</span>
                    <div>
                        <span className='flowHead'>Step process</span>
                        <p className='flowDesc'>A proven workflow <span>that ensures seamless collaboration and</span> outstanding results.</p>
                    </div>
                </div>
                <div className="flow">
                    <div className="flowIcon">
                        <div className="dot"></div>
                    </div>
                    <div>
                        <span className='flowHead'>01. Discovery call</span>
                        <p className="flowDesc">We’ll discuss your personal goals and the long-term vision of your brand.</p>
                    </div>
                </div>
                <div className="flow">
                    <div className="flowIcon">
                        <div className="dot"></div>
                    </div>
                    <div>
                        <span className='flowHead'>02. Custom design</span>
                        <p className="flowDesc">I’ll create a custom design tailored to your needs that brings a fresh look.</p>
                    </div>
                </div>
                <div className="flow">
                    <div className="flowIcon">
                        <div className="dot"></div>
                    </div>
                    <div>
                        <span className='flowHead'>03. Development</span>
                        <p className="flowDesc">I'll bring your approved design to life with clean, and efficient code.</p>
                    </div>
                </div>
                <div className="flow">
                    <div className="flowIcon">
                        <div className="dot"></div>
                    </div>
                    <div>
                        <span className='flowHead'>04. Launch</span>
                        <p className="flowDesc">I’ll help you get your website live and ready for the world to make an impact.</p>
                    </div>
                </div>
                
                <div className="location">
                    <a href="#contact" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ color: "black", fontWeight: 600 }}>Launch your business</span>
                        <box-icon name='right-arrow-alt' size="20px" color="blue"></box-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Workflow