import React from 'react'
import './Hero.css'
export default function Hero() {
    return (
        <div>
             
                        <div className=' container-fluid position-relative heroImage'>
                           <div className='row '>
                               <div className='col-md-12'>

                               <p className='heroHeading'>Building things<br/> is our mission.</p>
                                 <div className='heroDivButton position-absolute bottom-0 end-0 heroPostion'>
                                    <p className='heroDivHeading'>Feature Projects</p>
                                    <p className='heroDivPara'>The National University of Architecture</p>
                                        
                          
                                        
                                     
                                 </div>
                               </div>
                                

                           </div>
                      
                        
                              <div className='position-absolute bottom-0 end-0 heroPostion'>
                              <button type='submit' className='btn  heroButton'><span className="iconify" style={{fontSize:"26px"}} data-icon="ep:back"></span> Back</button>                             
                               <button type='submit' className='btn  heroButton'> Next <span className="iconify" data-icon="ep:back"  data-rotate="180deg" style={{fontSize:"26px"}}></span></button>
                              </div>
                               
                             

                                </div>

                            
                         
                        
                           

                   

                </div>


           
    )
}
