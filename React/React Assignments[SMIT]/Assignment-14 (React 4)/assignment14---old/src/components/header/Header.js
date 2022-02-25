import React from 'react';
import logo from '../../assests/images/logo.png';
import { Styles } from './Header.Style';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid" >
                    <a className="navbar-brand ms-md-5" href="#"><img src={logo}  alt="Logo" style={Styles.logoImage} />
                        <span style={Styles.logoFont}>TheBox</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link  cool-link" aria-current="page" href="#" style={Styles.fontLink}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cool-link" href="#" style={Styles.fontLink}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cool-link" href="#" style={Styles.fontLink}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cool-link" href="#" style={Styles.fontLink}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cool-link" href="#" style={Styles.fontContactUs}>Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}
