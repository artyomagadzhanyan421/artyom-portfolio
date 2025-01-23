import { useState } from 'react';

function useServices() {
    const [activeIndex, setActiveIndex] = useState(null);

    const services = [
        {
            id: 1,
            icon: 'bolt-circle',
            name: 'Landing Page',
            desc: 'Starts at $25.00',
            details: 'I will build high-converting, visually compelling landing pages that capture your audience’s attention and drive action.',
            features: [
                'Single page + 404 page',
                'Project source files',
                'Fully responsive',
                'Animation + Interactions',
                '1 week delivery',
                'Unlimited revisions',
            ],
        },
        {
            id: 2,
            icon: 'trophy',
            name: 'Full Website',
            desc: 'Starts at $30.00',
            details: 'I will build a full website that reflects your brand, engages your users, and provides a smooth navigation experience across all devices.',
            features: [
                'Up to 10 pages',
                'Project source files',
                'Fully responsive',
                'Animation + Interactions',
                '1-2 week delivery',
                'Unlimited revisions',
            ],
        },
    ];

    const toggleDropdown = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return { services, activeIndex, toggleDropdown };
}

export default useServices;