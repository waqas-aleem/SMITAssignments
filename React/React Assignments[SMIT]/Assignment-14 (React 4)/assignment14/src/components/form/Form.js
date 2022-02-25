import React from 'react'
import { formStyles } from './Form.Style'
export default function Form() {
    return (
        <div>
            <div className="container contact-form" style={formStyles.containerBg}>
                <div className="row">
                    <p className="text-center mt-5 "style={formStyles.formHeading}>What can us do for you?</p>
                    <p className="formPara ps-md-5 pe-md-5" style={formStyles.formPara} >We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }}>

                            </textarea>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
