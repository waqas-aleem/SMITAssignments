import React from 'react'
import './ConsultationComp.css'
export default function ConsultationComp() {
  return (
    <div> 
        <div className="container-fluid backgroundImage ">
            <div className="row">
                <div className="col-md-12">
                    <div className='row' >
                        <div className="col-md-12">
                        <p className='mainHeading'>Free consultation with exceptional quality</p>
                        </div>
                        <div className="col-md-8">
                        <span className='mainPara'>Just one call away: +84 1102 2703</span>
                        </div>
                        <div className="col-md-4 mt-3 mb-5">
                        <button type="submit" className=' buttonParent bg-transparent'>Get your consultation</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
