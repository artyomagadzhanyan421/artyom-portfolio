import { useState } from 'react';

function useWorkflow() {
    const [steps, setSteps] = useState([
        {
            id: 1,
            title: 'Discovery call',
            description: 'We’ll discuss your personal goals and the long-term vision of your website.',
        },
        {
            id: 2,
            title: 'Custom design',
            description: 'I’ll create a custom design tailored to your needs that brings a fresh look.',
        },
        {
            id: 3,
            title: 'Development',
            description: 'I\'ll bring your approved design to life with clean, and efficient code.',
        },
        {
            id: 4,
            title: 'Launch',
            description: 'I’ll help you get your website live and ready for the world to make an impact.',
        },
    ]);

    const updateStep = (id, updatedData) => {
        setSteps(prevSteps =>
            prevSteps.map(step => (step.id === id ? { ...step, ...updatedData } : step))
        );
    };

    return { steps, updateStep };
}

export default useWorkflow;