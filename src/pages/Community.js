import React from "react";
import Header from "../components/Header";

function Community(){
    return(
        
            <div className="container-xxl bg-white p-0">

                <Header page="Community" title="Our Community" />

        <div>
            <section className="forum-header">
                <h1>Forum</h1>
                <p>Welcome to our community forum! Ask questions, share knowledge, and connect with other programmers.</p>
            </section>
            <section className="forum-categories">
                <h2>Categories</h2>
                <ul>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">AI and Machine Learning</a></li>
                    <li><a href="#">Mobile App Development</a></li>
                    <li><a href="#">General Discussion</a></li>
                </ul>
            </section>
            <section className="forum-threads">
                <h2>Recent Events</h2>
                <ul>
                    <li>
                        <h3><a href="#">Implementing a Convolutional Neural Network in Python?</a></h3>
                        <p>Hosted by <a href="#">Emmanuel John</a> 24 hours ago</p>
                    </li>
                    <li>
                        <h3><a href="#">Securing Mobile Apps: Best Practices and Strategies</a></h3>
                        <p>Hosted by <a href="#">Jimmy Ali</a> 24 hours ago</p>
                    </li>
                    <li>
                        <h3><a href="#">Comparison of React and Angular for Web Development</a></h3>
                        <p>Hosted by <a href="#">Bob Johnson</a> 3 days ago</p>
                    </li>
                </ul>
            </section>
            <section className="forum-create-thread">
                <h2>Register for Tech Event</h2>
                <form>
                    <input type="text" placeholder="Event Name"/> 
                    <textarea placeholder="Enter Host Name"></textarea>
                     <button type="submit">Register</button>
                    
                </form>
            </section>
        </div>
   
    </div>
        
    )
}

export default Community;