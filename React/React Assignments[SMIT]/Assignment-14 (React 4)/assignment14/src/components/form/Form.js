import React from 'react'
import '../form/Form.css';
export default function Form() {
    return (
        <div>
            <div className="container-fluid contact-form containerBg"  >
                <div className="row">
                    <div className='col-md-12 m-auto'>
                        <p className="text-center mt-5 formHeading" >What can us do for you?</p>
                        <p className="formPara "  >We are ready to work on a project of any complexity, whether it's commercial or residential.</p>
                    </div>
                </div>
                <div>
                </div>
                <div className=" container bg-transparent w-50 ">

                    <div className="row">

                        <div className="col-md-12">


                            <form id="contact-form" method="post" action="" role="form">

                                <div className="messages"></div>

                                <div className="controls">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {/* <label htmlFor="form_name">Firstname *</label> */}
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Your Name *" required="required" data-error="Your Name is Required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {/* <label htmlFor="form_email">Email *</label> */}
                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" data-error="Valid email is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {/* <label htmlFor="form_phone">Phone</label> */}


                                                <select className="round form-control">
                                                    <option>Reason for Contacting  *</option>
                                                    <option>No external background image</option>
                                                    <option>No wrapper</option>
                                                </select>
                                                {/* <input id="form_reason" type="tel" name="reason" className="form-control" placeholder="Reason for Contacting * " data-error="Reason is required." /> */}
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {/* <label htmlFor="form_phone">Phone</label> */}
                                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone " />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 mb-4">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                
                                                <textarea id="form_message" name="message" className="form-control" placeholder="Message " rows="4"  ></textarea>

                                            </div>
                                            <span className='labelText'><span className='starsIcons'>*</span> indicates a required field</span>
                                        </div>
                                        <div className="col-md-12 mt-4 text-center">



                                            <button type="submit" className="btn buttonSubmit" >Submit</button>
                                        </div>
                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            </div>

        </div>



    )
}
