import React from 'react'
import './AboutUs.css'
import AboutImage from '../../assests/images/about_main.png'
export default function AboutUs() {
    return (
        <div>
            <div className='container mt-5 bg-transparent aboutMarginTop'>
            <div className='row position-relative'>
                <div className='col-md-8'>
                <img src={AboutImage} alt="About Main" className='aboutImage' />

                </div>
                <div className='col-md-4'>

                    <div className='aboutDiv'>
                       
                            <p className='aboutInnerHeading'>About us</p>

                            <p className='aboutPara ps-4 pe-5 mt-5 mb-4'>For more than 30 years we have been delivering world-class construction<br/> and we've built many lasting<br/> relationships along the way. </p>

                            <p className='aboutPara ps-4 pe-5'>We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                            <button type='submit' className='aboutButton mb-5'><span className='aboutButtonText'>More on Our History</span> </button>

                    </div>
                   
                </div>
             
            </div>

            </div>
            
        </div>
    )
}
