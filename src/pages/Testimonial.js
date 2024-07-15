import React from "react";
import OwlCarousel from 'react-owl-carousel';
import Header from "../components/Header";

function Testimonial() {
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    };

    return (
        <div>
            <div className="container-xxl bg-white p-0">
                <Header page="Testimonial" title="Testimonial" />
                
                {/* <!-- Testimonial Start --> */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                        <OwlCarousel {...options} className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded"
                                        src="img/avatarTwoFemale.png"
                                        style={{ width: "50px", height: "50px" }}
                                        alt="Client"
                                    />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded"
                                        src="img/avatarThreeMale.png"
                                        style={{ width: "50px", height: "50px" }}
                                        alt="Client"
                                    />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded"
                                        src="img/avatarOneFemale.png"
                                        style={{ width: "50px", height: "50px" }}
                                        alt="Client"
                                    />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded"
                                        src="img/avatarTwoMale.png"
                                        style={{ width: "50px", height: "50px" }}
                                        alt="Client"
                                    />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                {/* <!-- Testimonial End --> */}
            </div>
        </div>
    );
}

export default Testimonial;
