import React from "react";
import Header from "../components/Header";

function About(){
    return(
        <div>
            <div className="container-xxl bg-white p-0">
                
                <Header page="About" title="About Us" />
        
        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100" src="img/collaboration-4.jpg"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid" src="img/collaboration-1.jpg" style={{width: '85%', marginTop: '13%'}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid" src="img/collaboration-3.jpg" style={{width: '85%'}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-100" src="img/collaboration-2.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">Find the best opportunities in the tech industry</h1>
                        <li>Explore a network of skilled programmers and innovative organizations.</li>
                            <li>Connect with like-minded professionals and expand your coding horizons.</li>
                        <p><li>Collaborate on exciting projects and elevate your programming skills.</li></p>
                        <p><i className="fa fa-check text-primary me-3"></i>Unlock new horizons with elite coding experiences.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Dive into a world of innovative tech solution</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Join forces with top-tier experts and  different organizations</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

    </div>
        </div>
    )
}

export default About;