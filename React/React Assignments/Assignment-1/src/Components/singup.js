import React, { Component } from 'react'
import nrdoc from '../assets/NORDIC ROSE.png'
  class singup extends Component {
    render() {
        return (
            <div>
        <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 col-sm-12 cutommymainfont" >
          {/* style="margin-top: 50px;" */}

        <div className="mymainfont ">
          <p>Sign up for the newsletter</p>
          <p className="customsfpro">
            If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
          </p>
      
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">


              <div className="content">

                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email..."/>
                  <span className="input-group-btn">
                    <button className="btn mycustombtn" type="submit">SIGN UP</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>



    </div>
  </div>
  <div className="container-fluid mycustomfooter">
  <div className="row paddingzero marginzero ">
      <div className="col-md-12 col-sm-12 col-lg-12 paddingzero mycustomhide">
        <span className="footertextbold ">Digital product design</span>
          <span className="footertextnormal ">Remote work</span>
          <span className="footertextbold ">UX design</span>
          <span className="footertextnormal ">Distributed teams</span>
          <span className="footertextbold ">Creativity</span>
          <span className="footertextnormal ">Strategy</span>
          <span className="footertextbold ">Suspense</span>
          <span className="footertextnormal ">Growth</span>
      </div>
    </div>
    <div className="container ">
      <div className="row">
        <div className="col-md-2 col-sm-12"></div>
        <div className="col-md-8  col-sm-12 text-center" >
          <img src={nrdoc} className="me-autorounded mx-auto d-block myfooterlogo" alt="" />
          <p className="fmaintext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. 
          </p>
        </div>

      </div>
      <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <div className="myfooter text-center " >
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">RSS</a>
    </div>
    <div className="col-md-4"></div> 
          </div>
          
      </div>
    </div>

    <div className="row">
   <div className="col-md-12  col-sm-12 mycopyright text-center mt-3 pt-3" >
  
     <p>&copy;2012-2020 Nordic Rose Co. 
     <br/>All rights reserved.</p>

   </div>
 </div>
  </div>
</div>
        )
    }
}

export default singup
