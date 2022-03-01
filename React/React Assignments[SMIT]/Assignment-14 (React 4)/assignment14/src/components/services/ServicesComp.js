import React from 'react'
import './ServicesComp.css'
import icon1 from '../../assests/icons/icon1.png'
import icon2 from '../../assests/icons/icon2.png'
import icon3 from '../../assests/icons/icon3.png'
import icon4 from '../../assests/icons/icon4.png'
import icon5 from '../../assests/icons/icon5.png'
import icon6 from '../../assests/icons/icon6.png'
import image1 from '../../assests/images/image1.png'
import image2 from '../../assests/images/image2.png'
import image3 from '../../assests/images/image3.png'
import image4 from '../../assests/images/image4.png'
export default function ServicesComp() {
    return (
        <div>
            <div className='container-fluid serviceDiv mt-5'>


                <div className='row'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='serviceHeading'>Services</p>

                            </div>

                        </div>
                        <div className='row '>
                            <div className='col-md-4 mb-3'>
                                <div className='serviceCards m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon1} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading text-center mb-1'>Construction</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-4 mb-3'>
                                <div className='serviceCards serviceCardBlue m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon2} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading2 text-center mb-1'>Renovation</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-4 mb-3'>
                                <div className='serviceCards m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon3} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading text-center mb-1'>Consultation</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='row mt-5 mb-5'>
                            <div className='col-md-4 mb-3'>
                                <div className='serviceCards serviceCardBlue m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon4} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading2 text-center mb-1'>Repair Services</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-4 mb-3'>
                                <div className='serviceCards  m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon5} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading text-center mb-1'>Architecture</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-4'>
                                <div className='serviceCards serviceCardBlue m-auto'>
                                    <div className='mx-auto text-center mt-5'>
                                        <img src={icon6} alt="icon1" style={{
                                            width: "40px", height: "40px",
                                        }} />
                                        <p className='serviceCardLine mx-auto mt-3'></p>
                                        <div>
                                            <p className='serviceCardHeading2 text-center mb-1'>Electric</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>




                </div>

            </div>
            {/*Service 30 Years Portion  */}
            <div className="container bg-transparent  ">
                <div className="row ">
                    <div className="col-md-9">
                        <div className="row mt-5 position-relative">


                            <div className="col-md-6  mb-5 w-50">
                                <div className="expCard">

                                    <img src={image1} alt="Image 1" className='cardPosition1 ' />

                                    <p className="card-title expCardHeading">123</p>
                                    <p className='expCardPara'> Projects Completed </p>


                                </div>
                            </div>
                            <div className="col-md-6 mb-5 w-50">
                                <div className="expCard">
                                    <img src={image2} alt="Image 2" className='cardPosition2 ' />
                                    <p className="card-title expCardHeading">84</p>
                                    <p className='expCardPara'> Happy Clients</p>



                                </div>
                            </div>

                        </div>
                        <div className="row mt-1">


                            <div className="col-md-6 mt-1 position-relative mb-5 w-50">
                                <div className="expCard ">
                                    <img src={image4} alt="Image 3" className='cardPosition2 cardPosition3 ' />
                                    <p className="card-title expCardHeading">30</p>
                                    <p className='expCardPara'> Years in Business </p>


                                </div>
                            </div>
                            <div className="col-md-6 mt-2 position-relative mb-5 w-50">
                                <div className="expCard ">
                                    <img src={image3} alt="Image 4" className='cardPosition2 cardPosition4 ' />
                                    <p className="card-title expCardHeading">37</p>
                                    <p className='expCardPara'> Awards Win </p>


                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3">
                        <p className='expHeading'>30 Years Experience</p>
                        <p className='expPara'>
                            Our company has been the leading provided construction services to clients throughout the USA since 1988.
                        </p>
                        <button type="submit" className='expButton mb-5'>Contact Us</button>
                    </div>
                </div>

            </div>


        </div>
    )
}
