import React from "react";
import Header from "../components/Header";

function Programmers(){
    return(
        <div>
            <div className="container-xxl bg-white p-0">

                <Header page="Programmer Profile" title="Programmer Profile" />

        {/* <!-- Jobs Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Experts</h1>
                <h5 className="text-center mb-5 wow fadeInUp">Search for programmers based on skills, interests, and project needs.</h5>
                <form className="collaboration-section">
                    <input type="text" placeholder="Search..."/>
                    <a href="" className="btn btn-primary py-md-3 px-md-4">Search</a>
                </form>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <h6 className="mt-n1 mb-0">Featured</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <h6 className="mt-n1 mb-0">Full Time</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <h6 className="mt-n1 mb-0">Part Time</h6>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">John Doe</h5>
                                            <h6 className="mb-2">Artificial Intelligence Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mohammed Ali</h5>
                                            <h6 className="mb-2">Cyber Security Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarThreeMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Patrick Wanyama</h5>
                                            <h6 className="mb-2">Cloud Computing Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Jane Akinyi</h5>
                                            <h6 className="mb-2">Robotics Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mercy Wambui</h5>
                                            <h6 className="mb-2">Deep Learning Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarThreeMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Patrick Wanyama</h5>
                                            <h6 className="mb-2">Artificial Intelligence Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">John Doe</h5>
                                            <h6 className="mb-2">Robotics Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Jane Akinyi</h5>
                                            <h6 className="mb-2">Cloud computing Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mercy Wambui</h5>
                                            <h6 className="mb-2">Machine Learning Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mohammed Ali</h5>
                                            <h6 className="mb-2">Deep Learning Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh25,000 - Ksh65,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Jane Akinyi</h5>
                                            <h6 className="mb-2">Artificial Intelligence Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Part Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh15,000 - Ksh45,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarTwoMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Patrick Wanyama</h5>
                                            <h6 className="mb-2">IOT Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Part Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh15,000 - Ksh45,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneFemale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mercy Wambui</h5>
                                            <h6 className="mb-2">Cloud Computing Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Part Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh15,000 - Ksh45,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarOneMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">Mohammed Ali</h5>
                                            <h6 className="mb-2">Machine Learning Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Part Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh15,000 - Ksh45,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src="img/avatarThreeMale.png" alt="" 
                                        style={{width: "80px", height: "80px"}}/>
                                        <div className="text-start ps-4">
                                            <h5 className="mb-2">John Doe</h5>
                                            <h6 className="mb-2">Deep Learning Expert</h6>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Nairobi, Kenya</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Part Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>Ksh15,000 - Ksh45,000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Jobs End --> */}



    
    </div>
        </div>
    )
}

export default Programmers;