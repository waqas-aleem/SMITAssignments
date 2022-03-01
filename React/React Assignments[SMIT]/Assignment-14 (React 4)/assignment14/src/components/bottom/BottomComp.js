import React from 'react'
import './BottomComp.css'
import Logo from '../../assests/images/logo.png'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function BottomComp() 
{
  return (
    <div>
      <div className='container-fluid'>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 mt-5 '>

              <p className='bottomHeading '>Address: <span className='bottomPara '>6391 Elgin St. Celina, Delaware 10299</span></p>
              <p className='bottomHeading '>Phone:  <span className='bottomPara '>+84 1102 2703</span></p>
              <p className='bottomHeading '>Email:  <span className='bottomPara '>hello@thebox.com</span></p>

              <div className='mb-5 mt-5'>
                <img src={Logo} alt="" /><span className='logoText mt-5'>TheBox</span>
              </div>

            </div>
            <div className='col-md-6'>
              <p className='bottomHeading mt-5'>Newsletter:</p>
              <div className="px-md-1 d-flex flex-row gap-2 align-items-center mt-2"> <input className="form-control bottomInput" placeholder="Your email here" /> <button className="btn text-white bottomButtonHeading botomButton">Subscribe</button> </div>

              <p className='bottomHeading mt-4 '>Social:</p>
              <div className="social mb-5">
              
              
              <a className="fa fa-facebook text-decoration-none" title="" target="_blank" href="#"></a>
              <a className="fa fa-linkedin text-decoration-none" title="" target="_blank" href="#"></a>
              <a className="fa fa-twitter text-decoration-none" title="" target="_blank" href="#"></a>
              
              
           
              </div>
              

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
