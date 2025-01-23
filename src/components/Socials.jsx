import React from 'react'

function Socials() {
    return (
        <div className='Projects'>
            <a href="https://sales-project-theta.vercel.app/" className="project" target='_blank'>
                <img src="/socials/s1.webp" alt="image" />
                <div>
                    <p className='projectName'>X</p>
                    <p className="projectDesc">Check out my latest projects!</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
            <a href="https://agency-project-nu.vercel.app/" className="project" target='_blank'>
                <img src="/socials/s2.jpg" alt="image" />
                <div>
                    <p className='projectName'>LinkedIn</p>
                    <p className="projectDesc">Let's connect with each other!</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
            <a href="https://github.com/artyomagadzhanyan421" className="project" target='_blank'>
                <img src="/socials/s3.jpg" alt="image" />
                <div>
                    <p className='projectName'>GitHub</p>
                    <p className="projectDesc">Repos with all the source code!</p>
                </div>
                <div className="projectIcon">
                    <box-icon name='link-external' color="rgba(255, 255, 255, .2)" size="20px"></box-icon>
                </div>
            </a>
        </div>
    )
}

export default Socials