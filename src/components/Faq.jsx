import React, { useState } from "react";
import "./styles/faq.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function FAQ() {


    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);
    const [isDisabled4, setIsDisabled4] = useState(false);
    const [isDisabled5, setIsDisabled5] = useState(false);

    const handleClick = () => {
        // Toggle the disabled state
        setIsDisabled(!isDisabled);
    };
    const handleClick2 = () => {
        // Toggle the disabled state
        setIsDisabled2(!isDisabled2);
    };
    const handleClick3 = () => {
        // Toggle the disabled state
        setIsDisabled3(!isDisabled3);
    };
    const handleClick4 = () => {
        // Toggle the disabled state
        setIsDisabled4(!isDisabled4);
    };
    const handleClick5 = () => {
        // Toggle the disabled state
        setIsDisabled5(!isDisabled5);
    };

    return (
        <>
            <div className="ms-faq-div" id="faq" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                <div className="ms-faq-outer-div">

                    <div className="ms-faq-div1">
                        <p className="ms-faq-div1-p">Relevant stuff, bla bla 📣</p>
                    </div>

                    <div className="ms-faq-div2">

                        <div className="ms-faq-div2-div">
                            <div>
                                <p className="ms-faq-div2-div-p">Frequently asked questions</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="ms-faq-ques-outer-div" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                <div className="ms-faq-ques-ans-div">
                    <div className="ms-faq-ques-div">
                        <p className="ms-faq-p1">Can I cancel my subscrition?</p>
                        <div className="ms-faq-div100" onClick={handleClick}>{isDisabled?<RemoveCircleIcon className="ms-faq-symbol" />:<AddCircleIcon className="ms-faq-symbol" />}</div>
                    </div>
                    {isDisabled && <div className="ms-faq-ans-div">
                        <p className="ms-faq-p3">You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.</p>
                    </div>}
                </div>

                <div className="ms-faq-ques-ans-div">
                    <div className="ms-faq-ques-div">
                        <p className="ms-faq-p1">What happens when my trial ends?</p>
                        <div className="ms-faq-div100" onClick={handleClick2}>{isDisabled2?<RemoveCircleIcon className="ms-faq-symbol" />:<AddCircleIcon className="ms-faq-symbol" />}</div>
                    </div>
                    {isDisabled2 && <div className="ms-faq-ans-div">
                        <p className="ms-faq-p3">When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.</p>
                    </div>}
                </div>
                <div className="ms-faq-ques-ans-div">
                    <div className="ms-faq-ques-div">
                        <p className="ms-faq-p1">What payment methods do you offer?</p>
                        <div className="ms-faq-div100" onClick={handleClick3}>{isDisabled3?<RemoveCircleIcon className="ms-faq-symbol" />:<AddCircleIcon className="ms-faq-symbol" />}</div>
                    </div>
                    {isDisabled3 && <div className="ms-faq-ans-div">
                        <p className="ms-faq-p3">We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.</p>
                    </div>}
                </div>
                <div className="ms-faq-ques-ans-div">
                    <div className="ms-faq-ques-div">
                        <p className="ms-faq-p1">What is your refund policy?</p>
                        <div className="ms-faq-div100" onClick={handleClick4}>{isDisabled4?<RemoveCircleIcon className="ms-faq-symbol" />:<AddCircleIcon className="ms-faq-symbol" />}</div>
                    </div>
                    {isDisabled4 && <div className="ms-faq-ans-div">
                        <p className="ms-faq-p3">Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the "Help" section in your account or email us at support@Milton.com, and we'll be happy to assist you.</p>
                    </div>}
                </div>
                <div className="ms-faq-ques-ans-div">
                    <div className="ms-faq-ques-div">
                        <p className="ms-faq-p1">Do you offer discounts to educational institutions ?</p>
                        <div className="ms-faq-div100" onClick={handleClick5}>{isDisabled5?<RemoveCircleIcon className="ms-faq-symbol" />:<AddCircleIcon className="ms-faq-symbol" />}</div>
                    </div>
                    {isDisabled5 && <div className="ms-faq-ans-div">
                        <p className="ms-faq-p3">Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.</p>
                    </div>}
                </div>

            </div>
        </>
    );
}

export default FAQ;