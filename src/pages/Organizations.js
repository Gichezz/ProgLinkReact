import React from "react";
import Header from "../components/Header";

function Organizations(){
    return(
        <div>
            <div className="container-xxl bg-white p-0">

                <Header page="Organization Profile" title="Organization Profile" />

        {/* <!-- Job Detail Start --> */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gy-5 gx-4">
                    <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-5">
                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" 
                            style={{width: "80px", height: "80px"}}/>
                            <div className="text-start ps-4">
                                <h3 className="mb-3">Marketing Manager</h3>
                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h4 className="mb-3"> description</h4>
                            <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy 
                                vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet 
                                sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam 
                                clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                            <h4 className="mb-3">Responsibility</h4>
                            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                            </ul>
                            <h4 className="mb-3">Qualifications</h4>
                            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                <li><i className="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                            </ul>
                        </div>
        
                        <div className="">
                            <h4 className="mb-4">Apply For The Internship</h4>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control" placeholder="Your Email"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="Portfolio Website"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="file" className="form-control bg-white"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" rows="5" placeholder="Coverletter"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        
                    <div className="col-lg-4">
                        <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                            <h4 className="mb-4"> Summary</h4>
                            <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2045</p>
                            <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: 123 Position</p>
                            <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                            <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: Ksh25,000 - Ksh65,000</p>
                            <p><i className="fa fa-angle-right text-primary me-2"></i>Location: Nairobi, Kenya</p>
                            <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2045</p>
                        </div>
                        <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                            <h4 className="mb-4">Company Detail</h4>
                            <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Job Detail End --> */}


        
    </div>
        </div>
    )
}

export default Organizations;