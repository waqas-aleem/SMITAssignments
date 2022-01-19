import React from 'react'
import icon1 from '../assets/icon 01.png'
import icon2 from '../assets/icon 02.png'
import icon3 from '../assets/icon 03.png'

export default function FindSection() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="cold-md-12 mt-5 mb-5">
                        <p className="text-center findSectionHeading">What Can We Help You Find?</p>

                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4 d-md-flex justify-content-md-center">
                        <div className="card shadow-sm p-3 mb-5 bg-body rounded " >
                            <img src={icon1} className="card-img-top mt-5 mx-auto" alt="..." style={{ width: "122.5px", height: "94px" }} />
                            <div className="card-body text-center mt-5">
                                <h5 className="card-title findSectionCardHeading ">Buy a home</h5>
                                <p className="card-text findSectionPara mt-3">With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-md-center ">
                        <div className="card shadow-sm p-3 mb-5 bg-body rounded " >
                            <img src={icon2} className="card-img-top mt-5 mx-auto" alt="..." style={{ width: "122.5px", height: "94px" }} />
                            <div className="card-body text-center mt-5">
                                <h5 className="card-title findSectionCardHeading ">Rent a home</h5>
                                <p className="card-text findSectionPara mt-3">With 35+ filters and custom keyword search, Trulia can help you
                                    find a home.</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-md-center ">
                        <div className="card shadow-sm p-3 mb-5 bg-body rounded " >
                            <img src={icon3} className="card-img-top mt-5 mx-auto" alt="..." style={{ width: "122.5px", height: "94px" }} />
                            <div className="card-body text-center mt-5 p-5">
                                <h5 className="card-title findSectionCardHeading ">See neighborhoods</h5>
                                <p className="card-text findSectionPara mt-3">With more neighborhood insights than any other real estate
                                    website.</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}

