import React from "react";
import Header from "../components/Header";

function Category(){
    return(
        <div>
            <div className="container-xxl bg-white p-0">

                <Header page="Category" title="Category" />

        {/* <!-- Category Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h6 className="mb-3">Artificial Intelligence</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                            <h6 className="mb-3">Robotics</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                            <h6 className="mb-3">Internet of Things</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                            <h6 className="mb-3">Cloud Computing</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                            <h6 className="mb-3">Deep Learning</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                            <h6 className="mb-3">Machine Learning</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                            <h6 className="mb-3">Data Analytics</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href="">
                            <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                            <h6 className="mb-3">Cyber Security</h6>
                            <p className="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Category End --> */}

    </div>
        </div>
    )
}

export default Category;