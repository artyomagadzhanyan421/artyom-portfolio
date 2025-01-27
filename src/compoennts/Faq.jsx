import React from "react";
import useFaq from "../hooks/useFaq";

// CSS
import "../styles/Faq.css";

// Boxicons
import "boxicons";

function Faq() {
    const { faqs, expandedIndex, toggleFaq } = useFaq();

    return (
        <div className="Block">
            <center>
                <p className="blockHeading" style={{ marginBottom: 0 }}>FAQ</p>
            </center>
            <div className="content">
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq"
                            onClick={() => toggleFaq(index)}
                        >
                            <div>
                                <p>{faq.question}</p>
                                <div className="faqIcon">
                                    <box-icon
                                        name={expandedIndex === index ? "x" : "plus"}
                                    ></box-icon>
                                </div>
                            </div>
                            <span
                                style={{
                                    display: expandedIndex === index ? "flex" : "none",
                                }}
                            >
                                {faq.answer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;