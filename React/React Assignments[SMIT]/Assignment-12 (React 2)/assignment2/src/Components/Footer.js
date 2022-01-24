import React from 'react'
import logo from '../assets/Logo.png'

export default function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-md-3">
                        <p className="footerHeading">Popular Searches</p>
                        <a className="footerpara" href="#">Apartment for Rent</a>
                        <br/>
                        <a className="footerpara" href="#">Apartment Low to hide</a>
                        <br/>
                        <a className="footerpara" href="#">Offices for Buy</a>
                        <br/>
                        <a className="footerpara" href="#">Offices for Rent</a>
                        <br/>
                        
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">About Us</p>
                  
                        <a className="footerpara" href="#">Our Story</a>
                        <br/>
                        <a className="footerpara" href="#">Team Members</a>
                        <br/>
                        <a className="footerpara" href="#">Careers</a>
                        <br/>
                        <a className="footerpara" href="#">Contact Us</a>
                        <br/>
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">Quick links</p>
                        <a className="footerpara" href="#">Terms of Use</a>
                        <br/>
                        <a className="footerpara" href="#">Privacy Policy</a>
                        <br/>
                        <a className="footerpara" href="#">Contact Support</a>
                        <br/>
                        <a className="footerpara" href="#">FAQs</a>
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">Support</p>
                   
                        <a className="footerpara" href="#">Help Center</a>
                        <br/>
                        <a className="footerpara" href="#">Loan Support</a>
                        <br/>
                        <a className="footerpara" href="#">Managment</a>
                        <br/>
                        <a className="footerpara" href="#">Privacy Policy</a>
                    </div>
                </div>
               <div className="row mb-3">
                   <div className="col-md-6">
                       <img src={logo} alt=""/>
                   </div>

                   <div className="col-md-6 text-md-center mt-3 footerCopypara">
                       <p>&copy;2021 Besnik. All Rights Reserved</p>
                       
                   </div>
                   
               </div>
                   
               
            </div>
        </>
        
    )
}
