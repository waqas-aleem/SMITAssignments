import React from 'react';
import image1 from '../assets/e1.png';
import image2 from '../assets/e2.png';
import image3 from '../assets/e3.png';
import image4 from '../assets/e4.png';

import image5 from '../assets/e5.png';
import image6 from '../assets/e6.png';
import image7 from '../assets/e7.png';
import image8 from '../assets/e8.png';
import image9 from '../assets/e9.png';


export default function Testinomial() {
  return <>
   <div className="container-fluid testinomialbody mt-md-5">
       <div className="row">
           <div className="col-md-12">
           <p className="testiheading">TESTIMONIALS</p> 
           </div>
       </div>
         <div className="row">
             <div className="col-md-3">
                 <img src={image1} alt="" className="hiddenClass"/>
                 
             </div>

             <div className="col-md-6">
             <p className='testipara mt-md-5'> Our Clients send us bunch of smilies with our services and we love them</p>       
             </div>
             <div className="col-md-3 text-md-end">
                 <img src={image2} alt="" className="hiddenClass"/>
                 
             </div>
             
         </div>

         <div className="container position-relative mt-5">
             <div className="row">
                 <div className="col-md-4  text-md-center">
                     <img src={image3} alt="" className="hiddenClass" />
                 </div>
                 <div className="col-md-2 offset-md-6">
                     <img src={image4} alt="" className="hiddenClass"/>
                     </div>
             </div>
             <div className="row">
                 <div className="col-md-2">
                 <img src={image5} alt=""   className="mt-md-5 hiddenClass" />
                
                 </div>

           <div className="col-md-2 text-md-end">
                 <img src={image6} alt="" className="hiddenClass" />
                
                 </div>

                 <div className="col-md-4 text-center">
                     <div className="circular-img position-absolute hiddenClass" style={{top: "-70px",left: "40%"}} >
                         <div style={{border: "1px solid rgba(7, 133, 250,0.3)",borderRadius: "120px"}}   >
                         <img src={image7} alt="" className="hiddenClass mt-3" />            
                         </div>
                     </div>
                 
                
                 </div>

                 <div className="col-md-2 d-flex mb-0 mt-auto align-items-center">

                       
                         <img src={image8} alt="" className="hiddenClass  " /> 

                 </div>
                  <div className="col-md-2">


                      <img src={image9} alt="" className="hiddenClass mt-3" />

                  </div>


       </div>
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="testicard m-auto mb-5">
                            <p className="testipara2 pt-5 ps-5 pe-5 pb-3">"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
                            <p className="testpara3">Becky Nelson</p>
                            
                            <center   >
                            <i className="fa fa-star mx-1 mb-3" style={{color:"#FE7E22"}} aria-hidden="true"></i>
                            <i className="fa fa-star mx-1 mb-3" style={{color:"#FE7E22"}} aria-hidden="true"></i>
                            <i className="fa fa-star mx-1 mb-3" style={{color:"#FE7E22"}} aria-hidden="true"></i>
                            <i className="fa fa-star mx-1 mb-3" style={{color:"#FE7E22"}} aria-hidden="true"></i>
                            <i className="fa fa-star mx-1 mb-5" style={{color:"#999999"}}aria-hidden="true"></i>
                            </center>
                            
                            
                        </div>
                        
                    </div>
                    
                </div>

     </div>
       
   </div>
  
  
  
  </>;
}
