import React from 'react'
import { repStyles } from '../reputation/Reputation.style'
export default function Reputation() {
  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-12">

            <p style={repStyles.repText}>Our Reputation</p>

          </div>

        </div>
        <div className="row mb-5 mt-5">
 
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ri:customer-service-2-fill"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
                <p className="card-subtitle mb-2 " style={repStyles.repCardTitle}>Best Services</p>
                <p className="card-text mb-4" style={repStyles.repParaText}>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ri:customer-service-2-fill"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
                <h6 className="card-subtitle mb-2 " style={repStyles.repCardTitle}>Best Teams</h6>
                <p className="card-text mb-4" style={repStyles.repParaText}>Cursus semper tellus volutpat aliquet lacus. </p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title"><span className="iconify" data-icon="ic:twotone-design-services"
                  style={{ color: "#F9995D", height: "40px", width: "40px", marginTop: "21.67px" }}
                ></span></h5>
               
                <h6 className="card-subtitle mb-2 " style={repStyles.repCardTitle}>Best Designs</h6>
                <p className="card-text mb-4" style={repStyles.repParaText}>Ultricies at ipsum nunc, tristique nam lectus.</p>

              </div>
            </div>
          </div>

            
         
     
        </div>
      </div>

    </div>
  )
}
