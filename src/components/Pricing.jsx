import React,{useState} from "react";
import "./styles/pricing.css";
import DoneIcon from '@mui/icons-material/Done';

function Pricing() {

    const [isMonthlySelected, setIsMonthlySelected] = useState(true);

    const handleMonthlyClick = () => {
        setIsMonthlySelected(true);
    };

    const handleAnnuallyClick = () => {
        setIsMonthlySelected(false);
    };


    return (
        <>

            <div className="ms-price-div" id="pricing" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                <div className="ms-price-outer-div">

                    <div className="ms-price-div1">
                        <p className="ms-price-div1-p">Pricing and plans 💰</p>
                    </div>

                    <div className="ms-price-div2">

                        <div className="ms-price-div2-div">
                            <div>
                                <p className="ms-price-div2-div-p">Find the best plan for your needs</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="ms-price-opt-div" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                <div className="ms-price-opt-div-div1">
                    <div className="ms-price-month-annual-wrap">
                        <div className={`ms-price-month ${isMonthlySelected ? 'active' : ''}`}  onClick={handleMonthlyClick} disabled={isMonthlySelected}>
                            <p className="ms-price-month-p">Monthly</p>
                        </div>
                        <div className={`ms-price-annual ${isMonthlySelected ? '' : 'active'}`}  onClick={handleAnnuallyClick} disabled={!isMonthlySelected}>
                            <p className="ms-price-annual-p">Annually</p>
                        </div>
                    </div>
                    
                    <div className="ms-price-a-div">
                        <a href="" className="ms-price-a">✨ save 30%</a>
                    </div>
                </div>
            </div>

            <div className="ms-price-outer-div1" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                <div className="ms-price-card">
                    <div className="ms-price-card-div1"><p className="ms-price-color-1">Free</p></div>

                    <div className="ms-price-card-div2"><p>So you can see how incredible our tool is. </p></div>

                    <div className="ms-price-card-div3"><p><span>$0</span>/mo</p></div>

                    <div className="ms-price-card-div4"><p>Free for ever</p></div>

                    <div className="ms-price-card-div5"><a href="">Get started</a></div>

                    <div className="ms-price-card-div6"><p>No credit card needed</p></div>

                    <div className="ms-price-card-div7"><p>What's included:</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A cool feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A basic feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A top feature with limitations</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>An incredible feature so useful</p></div>
        
                </div>

                <div className="ms-price-card">
                    <div className="ms-price-card-div1"><p className="ms-price-color-2">Starter</p></div>

                    <div className="ms-price-card-div2"><p>So you can see how incredible our tool is. </p></div>

                    <div className="ms-price-card-div3"><p>{isMonthlySelected?<span>$19</span>:<span>$15</span>}/mo</p></div>

                    <div className="ms-price-card-div4"><p>Billed $180 yearly</p></div>

                    <div className="ms-price-card-div5"><a href="">Get started</a></div>

                    <div className="ms-price-card-div6"><p>7 days free trial no credit card needed</p></div>

                    <div className="ms-price-card-div7"><p>What's included:</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A cool feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A basic feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A top feature with limitations</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>An incredible feature so useful</p></div>
        
                </div>

                <div className="ms-price-card">
                    <div className="ms-price-card-div1"><p classname="ms-price-color-3">Pro</p></div>

                    <div className="ms-price-card-div2"><p>So you can see how incredible our tool is. </p></div>

                    <div className="ms-price-card-div3"><p>{isMonthlySelected?<span>$49</span>:<span>$45</span>}/mo</p></div>

                    <div className="ms-price-card-div4"><p>Billed $540 yearly</p></div>

                    <div className="ms-price-card-div5"><a href="">Get started</a></div>

                    <div className="ms-price-card-div6"><p>No credit card needed</p></div>

                    <div className="ms-price-card-div7"><p>What's included:</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A cool feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A basic feature</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>A top feature with limitations</p></div>
                    <div className="ms-price-card-div8"><p><DoneIcon className="ms-price-ion"/>An incredible feature so useful</p></div>
        
                </div>
            </div>
        </>
    );
}

export default Pricing;