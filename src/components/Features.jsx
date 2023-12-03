import React from "react";
import "./styles/feature.css";
import image2 from "../images/image2.webp";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.webp";
import image6 from "../images/image6.webp";

import icon1 from "../images/icon1.webp";
import icon2 from "../images/icon2.webp";
import icon3 from "../images/icon3.webp";

function Feature(){
    return(
        <>
            <div className="ms-feature-div" id="features">
                <div className="ms-feature-outer-div">

                    <div className="ms-feature-div1" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                        <p className="ms-feature-div1-p">Our main features 🦸🏼</p>
                    </div>

                    <div className="ms-feature-div2">

                        <div className="ms-feature-div2-div">
                                <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="600">
                                    <p className="ms-feature-div2-div-p">Discover your new superpowers</p>
                                </div>
                        </div>
                
                    </div>

                    <div className="ms-feature-div3" >

                        <div className="ms-feature-div3-div1" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                            <div className="ms-feature-div3-div1-div1">
                                <div className="ms-feature-div3-div1-a-div">
                                    <a className="ms-feature-div3-div1-a" href="">Seamless Scheduling</a>
                                </div>
                                <div className="ms-feature-div3-div1-p-div">
                                    <p className="ms-feature-div3-div1-p">Focus on what matters most for you</p>
                                </div>
                            </div>
                            <div className="ms-feature-div3-div1-div2">
                                <p className="ms-feature-div3-div1-div2-p">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                            </div>

                        </div>

                        <div className="ms-feature-div3-div2" data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                            <div className="ms-feature-div3-div2-div">
                                <img className="ms-feature-div3-div2-div-img" src={image2} alt="image2" />
                            </div>
                        </div>
                    </div>


                    {/* -----extra features  */}


                    <div className="ms-feature-div3 ms-feature-mobile-version">
                        <div className="ms-feature-div3-div2" data-aos="flip-right" data-aos-duration="600" data-aos-delay="500">
                            <div className="ms-feature-div3-div2-div">
                                <img className="ms-feature-div3-div2-div-img" src={image4} alt="image2" />
                            </div>
                        </div>
                        <div className="ms-feature-div4">
                            <div className="ms-feature-div3-div1" data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
                                <div className="ms-feature-div3-div1-div1">
                                    <div className="ms-feature-div3-div1-a-div">
                                        <a className="ms-feature-div3-div1-a ms-fet-a1" href="#">Smart Reminders & Task</a>
                                    </div>
                                    <div className="ms-feature-div3-div1-p-div">
                                        <p className="ms-feature-div3-div1-p">
                                            Never miss an important deadline or event again
                                        </p>
                                    </div>
                                </div>
                                <div className="ms-feature-div3-div1-div2 ms-var-for-extra-features">
                                    <p className="ms-feature-div3-div1-div2-p">Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                                </div>

                            </div>
                            <div className="ms-feature-div3-div3" >
                                <div className="ms-feature-div3-div3-div" data-aos="fade-right" data-aos-duration="600" data-aos-delay="600">
                                    <div className="ms-feature-div3-div3-div-div1">
                                        <p className="ms-feature-div3-div3-p1">I love how user-friendly this app is! It's so easy to add events and set reminders!</p>
                                        <p className="ms-feature-div3-div3-p2">Adam, entrepreneur</p>
                                    </div>
                                    <div className="ms-feature-div3-div3-div-div2">
                                        <div></div>
                                        <div><img className="ms-feature-div3-div3-div-div2-img" src={icon1} alt="" /></div>
        
                                    </div>
                                </div>
                            </div>
                        </div>

            
                    </div>


                    {/* 2nd box */}
                    <div className="ms-feature-div3">
                        
                        <div className="ms-feature-div4">
                            <div className="ms-feature-div3-div1" data-aos="flip-right" data-aos-duration="600" data-aos-delay="500">
                                <div className="ms-feature-div3-div1-div1">
                                    <div className="ms-feature-div3-div1-a-div">
                                        <a className="ms-feature-div3-div1-a ms-fet-a2" href="#">Seamless Scheduling</a>
                                    </div>
                                    <div className="ms-feature-div3-div1-p-div">
                                        <p className="ms-feature-div3-div1-p">
                                        Focus on what matters most for you
                                        </p>
                                    </div>
                                </div>
                                <div className="ms-feature-div3-div1-div2 ms-var-for-extra-features">
                                    <p className="ms-feature-div3-div1-div2-p">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                                </div>

                            </div>
                            <div className="ms-feature-div3-div3 ms-feature-2nd-box-modify-flex">
                                <div className="ms-feature-div3-div3-div" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                    <div className="ms-feature-div3-div3-div-div2">
                                        <div></div>
                                        <div><img className="ms-feature-div3-div3-div-div2-img" src={icon2} alt="" /></div>
        
                                    </div>
                                    <div className="ms-feature-div3-div3-div-div1 ms-feature-2nd-box">
                                        <p className="ms-feature-div3-div3-p1">I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.
                                        </p>
                                        <p className="ms-feature-div3-div3-p2">Annie, Designer</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="ms-feature-div3-div2">
                            <div className="ms-feature-div3-div2-div">
                                <img className="ms-feature-div3-div2-div-img" src={image5} alt="image2" />
                            </div>
                        </div>

            
                    </div>


                    {/* 3rd box */}
                    <div className="ms-feature-div3 ms-feature-mobile-version">
                        <div className="ms-feature-div3-div2" data-aos="flip-down" data-aos-duration="600" data-aos-delay="500">
                            <div className="ms-feature-div3-div2-div">
                                <img className="ms-feature-div3-div2-div-img" src={image6} alt="image2" />
                            </div>
                        </div>
                        <div className="ms-feature-div4">
                            <div className="ms-feature-div3-div1" data-aos="fade-right" data-aos-duration="600" data-aos-delay="600">
                                <div className="ms-feature-div3-div1-div1">
                                    <div className="ms-feature-div3-div1-a-div">
                                        <a className="ms-feature-div3-div1-a ms-fet-a3" href="#">Smart Reminders & Task</a>
                                    </div>
                                    <div className="ms-feature-div3-div1-p-div">
                                        <p className="ms-feature-div3-div1-p">
                                            Never miss an important deadline or event again
                                        </p>
                                    </div>
                                </div>
                                <div className="ms-feature-div3-div1-div2 ms-var-for-extra-features">
                                    <p className="ms-feature-div3-div1-div2-p">Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                                </div>

                            </div>
                            <div className="ms-feature-div3-div3">
                                <div className="ms-feature-div3-div3-div" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                    <div className="ms-feature-div3-div3-div-div1">
                                        <p className="ms-feature-div3-div3-p1">I've recommended this app to all my friends and colleagues! </p>
                                        <p className="ms-feature-div3-div3-p2">Karl, CTO of a cool startup</p>
                                    </div>
                                    <div className="ms-feature-div3-div3-div-div2">
                                        <div></div>
                                        <div><img className="ms-feature-div3-div3-div-div2-img" src={icon3} alt="" /></div>
        
                                    </div>
                                </div>
                            </div>
                        </div>

            
                    </div>




                    <div className="ms-feature-div1" data-aos="fade-up" data-aos-duration="300" data-aos-delay="500">
                        <p className="ms-feature-div1-p">And so much more... 💼</p>
                    </div>

                    <div className="ms-feature-div2" data-aos="fade-up" data-aos-duration="300" data-aos-delay="600">

                        <div className="ms-feature-div2-div">
                                <div>
                                    <p className="ms-feature-div2-div-p">Our features to make your life easier</p>
                                </div>
                        </div>
                
                    </div>

                   
                </div>
            </div>    





            <div className="ms-feature-card" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">

                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-1" href="">Cross-Device Sync</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                </div>
                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-2" href="">Auto Event Import</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.</p>
                    </div>

                </div>
                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-3" href="">Task Delegation</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.</p>
                    </div>

                </div>

                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="https://framerusercontent.com/images/VFrv8s9Ou5YYTsx7jkOfyXmAm2Y.png?scale-down-to=512" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-4" href="">Voice Command Integration</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.</p>
                    </div>

                </div>
                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="	https://framerusercontent.com/images/l2ZsBz5u7WqpiyCOQ4jeJmYCYIc.png?scale-down-to=512" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-5" href="">Customizable Alerts</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.</p>
                    </div>

                </div>
                <div className="ms-feature-card-div">
                    <div className="ms-feature-card-img-div">
                        <img className="ms-feature-card-div-img" src="https://framerusercontent.com/images/RGak3EPkyg9scIKkezsY8Rn7E.png?scale-down-to=512" alt="calender" />
                    </div>
                    <div className="ms-feature-card-a-div">
                        <a className="ms-feature-card-div-a ms-card-a-6" href="">Privacy Protection</a>
                    </div>
                    <div className="ms-feature-card-p-div">
                        <p className="ms-feature-card-div-p">Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.</p>
                    </div>

                </div>
            </div>  
        </>
    );
}

export default Feature;