import React, { useEffect, useState } from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='Navbar'>
            <nav className={`${isVisible ? "visible" : ""}`}>
                <a href="#"><box-icon name='home-alt' color="white" size="22px"></box-icon></a>
                <a href="#works">Works</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar