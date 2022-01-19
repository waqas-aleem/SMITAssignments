import React from 'react'
import section2 from '../assets/section2.png'
import bed from '../assets/bed.png'
import bath from '../assets/bath.png'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
export default function Section() 
{
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <p className="maintext">Search for Homes in your Neighborhood</p>
                    <p className="maintextp mb-5">Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.</p>

                    <div className="shadow-sm  p-2 mb-3 bg-body rounded mt-5">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-4">
                                    <p className="sectioncard2 pt-3">Address</p>
                                    <p className="sectioncard2para p-0 m-0">587 Bridgeton Road</p>
                                </div>

                                <div className="col-md-4">
                                    <p className="sectioncard2 pt-3">City</p>
                                    <p className="sectioncard2para p-0 m-0">El Paso, Texas</p>
                                </div>

                                <div className="col-md-4 d-md-flex align-items-md-center justify-content-md-center ">
                                    <button type="button" className="btn btn-primary mt-3 w-100">Search</button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                  
                </div>
                <div className="col-md-4 sectionimage position-relative rounded mx-auto d-block hiddenClass">
                    </div>
                    <div className="col-md-3">
                       <div className="card rounded border-0 shadow-sm  mb-md-5 bg-body rounded position-absoute top-50 start-0 translate-middle">
                        <img src={section2} className="card-img-top section2image rounded mx-auto d-block p-2" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title cardpriceportion ">$599,000</h5>
                                <span className="card-text cardsubpara me-5">Newport</span>
                                <img src={bed} alt=""  className="mx-auto "/><span>3</span>
                                <img src={bath} alt="" className="mx-1"/><span>2</span>
                                <p className="cardfooter mt-3"> 15 Lee Ave, Newport, Rl 02564</p>
                            </div>
                    </div> 
                    </div>
                    

                </div>
            </div>
           
            <div className="container-fluid mb-5  ">
                  <div className="row d-flex align-items-center  offset-1 text-center">
                      <div className="col-md-2 hiddenClass">
                          <img src={image1} alt=""/>
                      </div>
                      <div className="col-md-2 hiddenClass">
                      <img src={image2} alt=""/>
                      </div>
                      <div className="col-md-2 hiddenClass">
                      <img src={image3} alt=""/>
                      </div>
                      <div className="col-md-2 hiddenClass">
                      <img src={image4} alt=""/>
                      </div>
                      <div className="col-md-2 hiddenClass">
                      <img src={image5} alt=""/>
                      </div>
                  </div>
                  
              </div>  
           
              
            </>
    );
}
