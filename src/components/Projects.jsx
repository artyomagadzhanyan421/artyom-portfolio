import React from 'react';

// CSS
import "../styles/Projects.css";

// Boxicons
import "boxicons";

function Projects() {
    return (
        <div className='Projects'>
            <a href="https://sales-project-theta.vercel.app/" className="project" target='_blank'>
                <img src="/projects/forge.png" alt="image" />
                <div>
                    <p className='projectName'>Forge</p>
                    <p className="projectDesc">Sales & Marketing Website</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
            <a href="https://agency-project-nu.vercel.app/" className="project" target='_blank'>
                <img src="/projects/webify.png" alt="image" />
                <div>
                    <p className='projectName'>Webify</p>
                    <p className="projectDesc">Web Design Agency Website</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
            <a href="https://cyber-project-beryl.vercel.app/" className="project" target='_blank'>
                <img src="/projects/cipher.png" alt="image" />
                <div>
                    <p className='projectName'>Cipher</p>
                    <p className="projectDesc">Cyber Security Website</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
        </div>
    )
}

export default Projects