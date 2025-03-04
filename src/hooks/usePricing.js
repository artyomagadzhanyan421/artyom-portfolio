import { useMemo } from "react";

const usePricingData = () => {
    const pricingData = useMemo(() => ({
        professional: {
            title: "Professional",
            price: "$185.00",
            description:
                "I will build a full website that reflects your brand, engages your users, and provides a smooth navigation experience across all devices.",
            details: [
                "Essential tools to get started:",
                "Up to 10 pages",
                "Source code of the project",
                "Fully responsive",
                "Animation + Interactions",
                "6 days delivery",
                "3 revisions",
            ],
        },
        standard: {
            title: "Standard",
            price: "$135.00",
            description:
                "I will build high-converting, visually compelling landing page that capture your audience’s attention and drive action.",
            details: [
                "Essential tools to get started:",
                "Single page + 404 page",
                "Source code of the project",
                "Fully responsive",
                "Animation + Interactions",
                "4 days delivery",
                "2 revisions",
            ],
        },
    }), []);

    return pricingData;
};

export default usePricingData;