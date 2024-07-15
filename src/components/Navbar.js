import React from "react";


function Navbar(){
    return(
        <div>
            {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-primary">Prog Link</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" 
            data-bs-toggle="collapse" 
             data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="/learn" className="dropdown-item">Learn</a>
                            <a href="/category" className="dropdown-item">Categories</a>
                            <a href="/community" className="dropdown-item">Community</a>
                            <a href="/testimonial" className="dropdown-item">Testimonials</a>   
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profiles</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="/programmers" className="dropdown-item">Programmer Profile</a>
                            <a href="/organizations" className="dropdown-item">Organisation Profile</a>
                        </div>
                    </div>
                    <a href="/about" className="nav-item nav-link">About</a>
                    <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
                <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Link Up<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Navbar;