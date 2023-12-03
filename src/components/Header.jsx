import React,{useState} from "react";
import EjectIcon from '@mui/icons-material/Eject';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import "./styles/header.css";

function Header() {


    const [isVisible, setIsVisible] = useState(false);
    const [isToggled, setIsToggled] = useState(false);//for transition to work

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsToggled(!isToggled);
      };

    return (
        <>
            <div className={`ms-header-main-div ${isToggled ? 'open' : ''}`}>
                <div className="ms-header-div1" data-aos="fade-down" data-aos-duration="600" data-aos-delay="500">
                    <div><EjectIcon className="ms-header-icon" /></div>
                    <div><a className="ms-header-a ms-milton-a" href="#">Milton</a></div>
                </div>


                <div className="ms-header-links-div" data-aos="fade-down" data-aos-duration="400" data-aos-delay="700">
                    <div className="ms-header-links"><a href="#features" className="ms-header-a">Features</a></div>
                    <div className="ms-header-links"><a href="#testimonial" className="ms-header-a">Testimonial</a></div>
                    <div className="ms-header-links"><a href="#pricing" className="ms-header-a">Pricing</a></div>
                    <div className="ms-header-links"><a href="#faq" className="ms-header-a">FAQs</a></div>
                    <div className="ms-header-links"><a className="ms-header-a">Blog</a></div>
                </div>
                <div class="ms-header-div-3" data-aos="fade-down" data-aos-duration="600" data-aos-delay="900">
                    <div><button class="ms-header-login" type="submit">Log in</button></div>
                    <div><button class="ms-header-get-started" type="submit">Get started</button></div>    
                </div>
                <div className="ms-header-toggler-div"  onClick={toggleVisibility}>
                    {isToggled?<CloseIcon className="ms-header-navbar-toggler"/>:<MenuIcon className="ms-header-navbar-toggler"/>}
                </div>
                {isVisible && <div className={`ms-header-mobile-div ${isToggled ? 'open' : ''}`}>
                    <div className="ms-header-links ms-header-ana"><a href="#features" className="ms-header-a">Features</a></div>
                    <div className="ms-header-links ms-header-ana"><a href="#testimonial" className="ms-header-a">Testimonial</a></div>
                    <div className="ms-header-links ms-header-ana"><a href="#pricing" className="ms-header-a">Pricing</a></div>
                    <div className="ms-header-links ms-header-ana"><a href="#faq" className="ms-header-a">FAQs</a></div>
                    <div className="ms-header-links ms-header-ana"><a className="ms-header-a">Blog</a></div>
                    <div className="ms-header-ana"><button class="ms-header-login" type="submit">Log in</button></div>
                    <div className="ms-header-ana"><button class="ms-header-get-started" type="submit">Get started</button></div>    
                </div>}
                


            </div>

        </>
    );
}

export default Header;