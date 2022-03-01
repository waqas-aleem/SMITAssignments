import React from 'react'
 import './Reputation.css'
export default function Reputation() {
  return (
    <div>
      <div className="container bg-transparent mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">

            <h4 className='repHeading'>Our Reputation</h4>

          </div>

        </div>
        <div className="row mt-5">
 
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <div className="card cardSize">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ri:customer-service-2-fill"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
                <p className="card-subtitle cardHeading">Best Services</p>
                <p className="cardPara mb-0">Nullam senectus porttitor in<br/> eget. Eget rutrum leo interdum.</p>

              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <div className="card cardSize">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ri:customer-service-2-fill"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
                <p className="cardHeading" >Best Teams</p>
                <p className="cardPara mb-0">Cursus semper tellus volutpat<br/>aliquet lacus. </p>
                 

              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <div className="card cardSize">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ic:twotone-design-services"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
               
                <p className=" cardHeading" >Best Designs</p>
                <p className="cardPara ">Ultricies at ipsum nunc, tristique nam lectus.</p>

              </div>
            </div>
          </div>

            
         
     
        </div>
      </div>

    </div>
  )
}
