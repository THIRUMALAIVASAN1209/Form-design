import React from 'react';
import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import './Routers.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function RouterConcept() {
  return (
    <Router>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/">
                  <img className="logo" src="https://cdn2.vectorstock.com/i/1000x1000/74/56/initial-t-letter-logo-creative-modern-typography-vector-42367456.jpg" alt="Logo" style={{height: "50px"}} />
                </Link>
              </td>
              <td>
                <Link to="/">
                  <h1 className="web-name" style={{width: "50%"}}>Thiru</h1>
                </Link>
              </td>
              <td className="nav-btns">
                <Link to="/"><button className="Home">Home</button></Link>
                <Link to="/AboutUs"><button>About Us</button></Link>
                <Link to="/ContactUs"><button>Contact Us</button></Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
        <footer style={{color: "white", marginBottom: "0px", height: "60px", alignItems: "center", display: "flex", justifyContent: "center"}}>
          <p style={{fontSize: "smaller"}}>© Copyright 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default RouterConcept;
