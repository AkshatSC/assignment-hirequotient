import React,{useEffect} from "react";
import "./styles/home.css";
import image1 from "../images/image1.webp";

function Home() {

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://embed.praisehive.com/js/embed.js"
        script.defer = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])


    return (
        <>

            <div className="ms-home-div">
                <div className="ms-home-outer-div" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1100">

                    <div className="ms-home-div1">
                        <p className="ms-home-div1-p">An other way to manage time️</p>
                    </div>

                    <div className="ms-home-div2">

                        <div className="ms-home-div2-div">
                                <div>
                                    <p className="ms-home-div2-div-p">Your new favorite</p>
                                </div>
                                <div>
                                    <p className="ms-home-div2-div-p">calendar 🗓️ app</p>
                                </div>
                               
                        </div>
                
                    </div>

                    <div className="ms-home-div3">
                        <div className="ms-home-div3-div">
                            <p className="ms-home-div3-p">Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </p>
                        </div>
                    </div>

                    <div className="ms-home-div4">
                        <div className="ms-home-div4-div">
                            <a className="ms-home-div4-a" href="#">Get started, it's free</a>
                        </div>
                           
                    </div>

                    <div className="ms-home-div5">
                        <p className="ms-home-div5-p">Free 14 days trials,no credit card needed</p>
                    </div>

                    <div className="ms-home-div6">
                        <div
                            className="praisehive-embed ms-home-div6-img"
                            id="praisehive-clpmg4euz0004zg0kbqk3byrf"
                            data-widget-layout="avatars"
                        />
                    </div>

                    <div className="ms-home-div7">
                        <div className="ms-home-div7-div">
                            <img className="ms-home-div7-img" src={image1} alt="image1" />
                        </div>
                        
                    </div>

                </div>




            </div>



        </>
    );
}

export default Home;