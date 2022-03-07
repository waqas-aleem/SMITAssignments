import React from 'react';
import logo from '../../assests/images/logo.png';
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid" >
                    <a className="navbar-brand ms-md-5" href="#"><img src={logo} alt="Logo" />
                        <span className='logoText'>TheBox</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link navText" aria-current="page" href="#" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navText" href="#" >About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navText" href="#" >Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navText" href="#" >Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link contactUs navText me-3" href="#" >Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}
