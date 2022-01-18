import React, { Component } from "react";
import logo from '../assets/Logo.png';
import mainImage from '../assets/main.png'
import '../mycustomcss.css';
 import MikaPortion from './MikaPortion.js'
 
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg  navbar-light navBarBorder  ">
        <a className="navbar-brand navbar-brand mylogo " href="#">
                <img src={logo} alt="logo" className="mylogo" />
              </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item  ">
                  <a className="nav-link active mycustomlink newyorkfont py-3" aria-current="page" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mycustomlink newyorkfont py-3" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mycustomlink newyorkfont py-3" aria-current="page" href="#">
                    LINK
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mycustomlink newyorkfont py-3" href="#">
                    PROJECTS
                  </a>
                </li>
                 
              </ul>
            </div>
        
        </nav>
        </div>
        <div className="row m-0">
             <div className="col-md-6 m-auto ">

             <p className="mymainfont">
          A few words about this blog platform, Ghost, and how this site was made
        </p>
        <p className="sfmono">
          Why Ghost (&amp; Figma) instead of Medium, WordPress
          <br/>or other options?
        </p>
             </div>



        </div>
     
        
        <img src={mainImage} alt="" className="w-100" />
           
         
        <MikaPortion/>
     </div>
     
    );
  }
}

export default Navbar;
