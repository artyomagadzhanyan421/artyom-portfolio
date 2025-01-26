import { useState } from "react";

const useFaq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What services do you offer?",
            answer:
                "I offer a wide range of services, including custom web design, website development, and ongoing maintenance and support.",
        },
        {
            question: "How long does it take to complete a project?",
            answer:
                "Project timelines depend on the complexity, but most are finished within 2–4 weeks, allowing time for feedback and revisions.",
        },
        {
            question: "Can I request additional revisions?",
            answer:
                "Yes, you can request extra revisions after the initial ones included in the package, though additional fees may apply.",
        },
        {
            question: "Do you provide website maintenance?",
            answer:
                "Yes, I offer ongoing maintenance services, including updates, security checks, performance optimization, and content updates.",
        },
    ]);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFaq = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return { faqs, expandedIndex, toggleFaq };
};

export default useFaq;