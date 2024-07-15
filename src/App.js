import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import Learn from './pages/Learn';
import Category from './pages/Category';
import Testimonial from './pages/Testimonial';
import Programmers from './pages/Programmers';
import Organizations from './pages/Organizations';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // This ensures the spinner is shown only on the initial load
  }, []);

  return (
    <BrowserRouter>
      {loading && <Spinner />}
      {!loading && <Main />}
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); 

      return () => clearTimeout(timer);
    };

    handleRouteChange();

    // Listen for route changes
    return () => handleRouteChange();
  }, [location]);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/learn' element={<Learn />} />
            <Route path='/category' element={<Category />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/community' element={<Community />} />
            <Route path='/programmers' element={<Programmers />} />
            <Route path='/organizations' element={<Organizations />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
