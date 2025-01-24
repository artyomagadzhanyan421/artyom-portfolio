import React from 'react';

// CSS
import "../styles/Projects.css";

function Projects() {
    return (
        <section id='projects'>
            <p className="heading section">The work i have done so far</p>

            <div className="projectsGrid">
                <a href="#" className="project">
                    <div className="projectImage">
                        <img src="/projects/p1.png" alt="image" />
                    </div>
                </a>
                <a href="#" className="project">
                    <div className="projectImage">
                        <img src="/projects/p2.png" alt="image" />
                    </div>
                </a>
                <a href="#" className="project">
                    <div className="projectImage">
                        <img src="/projects/p3.png" alt="image" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects