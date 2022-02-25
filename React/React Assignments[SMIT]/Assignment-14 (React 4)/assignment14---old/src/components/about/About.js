import React from 'react'
import AboutMan  from '../../assests/images/about_main.png';
import {AboutStyle} from './About.Style'
export default function About() {
  return (
    <div>
                <div className="container mt-md-5 position-relative">
                    <div className="row">
                        <div className="col-md-7  mt-5">
                          <img className="aboutimage" src={AboutMan} alt="About Man Image"  />
                            
                        </div>
                        <div className="col-md-4 aboutDiv mx-sm-auto" style={AboutStyle.aboutDiv}>
                                
                        </div>
                        
                    </div>
                    
                </div>
    </div>
  )
}
