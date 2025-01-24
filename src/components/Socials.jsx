import React from 'react'

function Socials() {
    return (
        <div className='Projects'>
            <a href="#" className="project" target='_blank'>
                <img src="/socials/s1.webp" alt="image" />
                <div>
                    <p className='projectName'>X</p>
                    <p className='projectDesc'>Check out my latest projects!</p>
                </div>
                <div className="redirect">
                    <box-icon name='link-external' color="dimgray" size="20px"></box-icon>
                </div>
            </a>
            <a href="#" className="project" target='_blank'>
                <img src="/socials/s2.jpg" alt="image" />
                <div>
                    <p className='projectName'>LinkedIn</p>
                    <p className='projectDesc'>Let's connect!</p>
                </div>
                <div className="redirect">
                    <box-icon name='link-external' color="dimgray" size="20px"></box-icon>
                </div>
            </a>
            <a href="https://github.com/artyomagadzhanyan421" className="project" target='_blank'>
                <img src="/socials/s3.jpg" alt="image" />
                <div>
                    <p className='projectName'>GitHub</p>
                    <p className='projectDesc'>Source code for my projects!</p>
                </div>
                <div className="redirect">
                    <box-icon name='link-external' color="dimgray" size="20px"></box-icon>
                </div>
            </a>
        </div>
    )
}

export default Socials