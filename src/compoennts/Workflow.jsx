import React from 'react';

// CSS
import "../styles/Workflow.css";

// Boxicons
import "boxicons";

// Hooks
import useWorkflow from '../hooks/useWorkflow';

function Workflow() {
    const { steps } = useWorkflow();

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
                {steps.map(step => (
                    <div className="flow" key={step.id}>
                        <div className="flowIcon">
                            <div className="dot"></div>
                        </div>
                        <div>
                            <span className='flowHead'>{`${step.id.toString().padStart(2, '0')}. ${step.title}`}</span>
                            <p className="flowDesc">{step.description}</p>
                        </div>
                    </div>
                ))}
                <div className="location">
                    <a href="#contact" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ color: "black", fontWeight: 600 }}>Launch your business</span>
                        <box-icon name='right-arrow-alt' size="20px" color="blue"></box-icon>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Workflow;