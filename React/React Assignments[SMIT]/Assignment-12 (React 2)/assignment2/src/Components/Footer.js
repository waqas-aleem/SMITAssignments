import React from 'react'
import logo from '../assets/Logo.png'

export default function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-md-3">
                        <p className="footerHeading">Popular Searches</p>
                        <p className="footerpara">Apartment for Rent</p>
                        <p className="footerpara">Apartment Low to hide</p>
                        <p className="footerpara">Offices for Buy</p>
                        <p className="footerpara">Offices for Rent</p>
                        
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">About Us</p>
                   
                        <p className="footerpara">Our Story</p>
                        <p className="footerpara">Team Members</p>
                        <p className="footerpara">Careers</p>
                        <p className="footerpara">Contact Us</p>
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">Quick links</p>
                   
                        <p className="footerpara">Terms of Use</p>
                        <p className="footerpara">Privacy Policy</p>
                        <p className="footerpara">Contact Support</p>
                        <p className="footerpara">FAQs</p>
                    </div>
                    <div className="col-md-3">
                    <p className="footerHeading">Support</p>
                   
                        <p className="footerpara">Help Center</p>
                        <p className="footerpara">Loan Support</p>
                        <p className="footerpara">Managment</p>
                        <p className="footerpara">Privacy Policy</p>
                    </div>
                </div>
               <div className="row mb-3">
                   <div className="col-md-6">
                       <img src={logo} alt=""/>
                   </div>

                   <div className="col-md-6 text-md-end footerCopypara">
                       <p>&copy;2021 Besnik. All Rights Reserved</p>
                       
                   </div>
                   
               </div>
                   
               
            </div>
        </>
        
    )
}
