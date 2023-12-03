import React from "react";
import "./styles/footer.css";
import EjectIcon from '@mui/icons-material/Eject';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    return(
        <>
        
            <div className="ms-footer-main-div">
                <div>
                    <div className="ms-footer-endgame"><EjectIcon className="ms-footer-icon-head"/><p className="ms-footer-heading">Milton</p></div>
                    <div className="ms-footer-end"><p className="ms-footer-p">A short text explaining why my startup is so cool</p></div>
                    <div className="ms-footer-end"><p className="ms-footer-p">© My super start-up</p></div>
                    <div className="ms-footer-icons-box">
                        <div><TwitterIcon className="ms-footer-icon" /></div>
                        <div><FacebookIcon className="ms-footer-icon"/></div>
                        <div><LinkedInIcon className="ms-footer-icon"/></div>
                    </div>
                </div>
                    

                <div>
                    <div><p className="ms-footer-heading">Products</p></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Features</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Testimonials</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Pricing</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">FAQs</a></div>

                </div>

                <div>
                    <div><p className="ms-footer-heading">Resources</p></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Change log</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Help center</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Blog</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Contact</a></div>

                </div>

                <div>

                    <div><p className="ms-footer-heading">Others</p></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Terms</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Affiliation</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Privacy</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Press</a></div>

                </div>

                <div className="ms-footer-max-flex-div">
                    <div><p className="ms-footer-heading">From the blog</p></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Organizing Your Calendar for Enhanced Productivity and Focus</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</a></div>
                    <div className="ms-footer-end"><a className="ms-footer-p">Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</a></div>

                </div>
            </div>
        
        </>
    );
}

export default Footer;