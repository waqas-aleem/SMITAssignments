import React, { Component } from "react";
import image3 from "../assets/image 3.jpg";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import content from '../assets/content.jpg';
import group10 from '../assets/Group 10.png';
import r4 from '../assets/Rectangle 4.png';
import r11 from '../assets/Rectangle 11.png';
import r10 from '../assets/Rectangle 10.png';
import r37 from '../assets/Rectangle 37.png';
import r38 from '../assets/Rectangle 38.png';
import r39 from '../assets/Rectangle 39.png';

 
class MikaPortion extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="row border-top border-dark">
            <div className="col-lg-2 col-xl-1 col-md-1 text-xlg-end">
              <img src={image3} alt="" className="rounded-circle mt-3" />
            </div>
            <div className="col-lg-6 col-xl-8 col-md-6 mt-3">
              <span className="sfpro">Mika MAtikainen</span>
              <br />
              <span className="sfproCustom my-0">Apr 15, 2020. 4 min read</span>
            </div >
            <div className="col-lg-4 col-md-5 col-xl-3  mt-5">
              <div>
                
              
              <div className="m-auto ">
              <span className="shadow p-3">
            <i className="fa fa-twitter shadow "></i>
            </span>
            <span className="shadow p-3">
            <span className="social">
            <i className="fa fa-facebook  "></i>
            </span>
            </span>
            <span className="shadow p-3 ">
            <span className="social2">
            <i className="fa fa-whatsapp  "></i>
            </span>
            </span>
            </div>
              </div>
              </div>
            
          </div>
        </div>

        <div className="container">
          <div className="row  justify-content-center">
              
            <div className="col-md-8">
              <div  >
                <p className="newyorkmedium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu velit tempus erat egestas efficitur. In hac habitasse
                  platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                  Aenean pharetra quis lacus at viverra 
                </p>
                <p className="newyorkmedium">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                  In eu dui molestie, molestie lectus eu, semper lectus 
                </p>
              </div>
            <div className="sfpro1 mt-5 mb-5 fw-bold"> 
            
           <p>Next on the pipeline</p>
          
           
        </div>
        <p className="newyorkmedium mt-5">Duis eu velit tempus erat egestas efficitur. In hac
            habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="newyorkmedium mt-5"  >Morbi efficitur auctor metus, id mollis lorem pellentesque
            id. Nullam posuere maximus dui et fringilla. </p>

            </div>
           
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">

            <img src={content} alt="" className="w-100" />      
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-3">
              
            </div>
            <div className="col-md-6">
            <p className="  mikaFigureCaption " >
        
          Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.
        </p>
            </div>
            
          </div>
          {/*  */}
          <div className="row">
      <div className="col-md-6 col-sm-12  mt-3 m-auto " >
        <p className="newyorkmedium">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p  className="newyorkmedium">
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante.
          Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere
          maximus dui et fringilla. Nulla non volutpat leo.
        </p>
        <p className="mycustomhide newyorkmedium" >
          A list looks like this:
        </p>
        <ul className="mylist mycustomhide newyorkmedium"  >
          <li> First item in the list</li>
          <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
          <li>Third item in the list</li>
        </ul>
        <p className="newyorkmedium">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
          posuere ligula.
        </p>
        <p className=" newyorkmedium mt-5" >
          Thanks for reading,<br/>
          Mika
        </p>

        <p className="sfpro mycustomshow ">Share :</p>
        <div className="row favbelow  socialbelow"  >
          <div className="col-4 socialbelow1"  >
            <span>
              <i className="fa fa-twitter "></i>
              <span className="sfpro mycustomhide" > Share on Twitter</span>



            </span>


          </div>



          <div className="col-4 socialbelow2 ">
            <span>

              <span className="social">
                <i className="fa fa-facebook  ">
                </i>
              </span>
              <span className="sfpro mycustomhide" >Share on Facebook</span>

            </span>


          </div>



          <div className="col-4 socialbelow2 " >
            <span>

              <span className="social">
                <i className="fa fa-whatsapp  ">
                </i>
              </span>
              <span className="sfpro mycustomhide" >Share on Whatsapp</span>

            </span>


          </div>


        </div>
        <div className="sfpro" >
          <span>Tags:</span>
          <span className="border-bottom border-2 border-dark">product design</span><span>,</span>
          <span className="border-bottom border-2 border-dark">culture</span>
        </div>
          <div className="container mt-5">

            <div className="row mikaborder">

              <div className="col-md-2 col-sm-2 mt-3">
                <img src={image3} className="rounded-circle"  alt=""/>
              </div>
              <div className="col-md-10"  >
                <span className="sfpro33">
                  <b>Mika Matikainen</b> is a Design Founder &amp; Advisor, Berlin School of Creative Leadership Executive MBA
                  participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder. </span>
              </div>

            </div>
          </div>

      </div>
    </div>
        </div>
          
       <div className="mt-5">
         <hr />
         <div className="position-relative">
           
           <img src={group10} alt=""  className="eyeimg" />      
          
         
         </div>
         
       </div>
       <div className="container">
         <div className="row">
           <div className="col-md-12"> 
           <p className="mymainfontcustom" >What to read next</p>
             
           </div>
           
         </div>
         
       </div>
       <div className="container gimages">
         <div className="row">
           <div className="col-md-4">
             <img src={r4} alt="" />
             <p className="sfpro1">
          Connecting artificial intelligence with digital product design
        </p>
           </div>
           {/*  */}
           <div className="col-md-4">
             <img src={r11} alt="" />
             <p >
             Hello world, or, in other words, why this blog exists
        </p>
           </div>
           {/* */}
           <div className="col-md-4">
             <img src={r10} alt="" />
             <p >
             Here are some things you should know regarding how we work
        </p>
           </div>

         </div>
         <div className="row">
           <div className="col-md-4">
             <img src={r37} alt="" />
             <p className="sfpro1">
         
             A few words about this blog platform, Ghost, and how this site was made
        
        </p>
           </div>
           {/*  */}
           <div className="col-md-4">
             <img src={r39} alt="" />
             <p >
            
          Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better
        
        </p>
           </div>
           {/* */}
           <div className="col-md-4">
             <img src={r38} alt="" />
             <p >
             How modern remote working tools get along with Old School Cowboy's methods 
        </p>
           </div>

         </div>
       </div>
      </div>
    );
  }
}

export default MikaPortion;
