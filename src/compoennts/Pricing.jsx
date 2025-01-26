import React, { useState } from "react";
import usePricing from "../hooks/usePricing";

// CSS
import "../styles/Pricing.css";

function Pricing() {
    const pricingData = usePricing();
    const [selectedPlan, setSelectedPlan] = useState("standard");

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    const selectedData = pricingData[selectedPlan];

    return (
        <div className="Block" id="pricing">
            <center>
                <p className="blockHeading">Flexible plans for every need</p>
            </center>
            <center>
                <p className="blockDesc" style={{ maxWidth: "400px" }}>
                    Whether you’re starting fresh or need a complete overhaul, choose the
                    plan that fits your project.
                </p>
            </center>
            <div className="content">
                <div className="plans">
                    <button
                        className={`planButton ${selectedPlan === "standard" ? "active" : ""}`}
                        onClick={() => handlePlanChange("standard")}
                    >
                        Standard
                    </button>
                    <button
                        className={`planButton ${selectedPlan === "professional" ? "active" : ""}`}
                        onClick={() => handlePlanChange("professional")}
                    >
                        Professional
                    </button>
                </div>

                <div className="cardOverlay noneTransform">
                    <div className="cardMain noneTop">
                        <div>
                            <div className="pack">
                                <p className="packTitle">{selectedData.title}</p>
                                <div>
                                    <p>{selectedData.price}</p>
                                    <span>/project</span>
                                </div>
                            </div>
                            <p className="packDesc">{selectedData.description}</p>
                        </div>
                        <a href="#" className="link">
                            <span>Get Started</span>
                            <div className="linkIcon">
                                <box-icon name="right-arrow-alt" color="blue"></box-icon>
                            </div>
                        </a>
                    </div>
                    <ul className="packDetails">
                        {selectedData.details.map((detail, index) => (
                            <li key={index}>
                                {index > 0 && <box-icon name="check" size="20px"></box-icon>}
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pricing;