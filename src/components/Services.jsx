import React from 'react';
import useServices from '../hooks/useServices';

// CSS
import "../styles/Services.css";

function Services() {
    const { services, activeIndex, toggleDropdown } = useServices();

    return (
        <div className="Projects">
            {services.map((service, index) => (
                <div key={service.id} className="service">
                    <div
                        className="serviceFlex"
                        onClick={() => toggleDropdown(index)}
                    >
                        <div className="serviceIcon">
                            <box-icon
                                type="solid"
                                name={service.icon}
                                color="white"
                                size="31px"
                            ></box-icon>
                        </div>
                        <div>
                            <p className="projectName">{service.name}</p>
                            <p className="projectDesc">{service.desc}</p>
                        </div>
                        <div className="projectIcon">
                            <box-icon
                                name="right-arrow-circle"
                                color="rgba(255, 255, 255, .2)"
                                size="20px"
                            ></box-icon>
                        </div>
                    </div>
                    <div
                        className="dropDown"
                        style={{
                            display: activeIndex === index ? 'initial' : 'none',
                        }}
                    >
                        <span className="serviceDesc">{service.details}</span>
                        <ul>
                            {service.features.map((feature, idx) => (
                                <li key={idx}>
                                    <div className="dot"></div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services;