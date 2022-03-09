import React,{useState} from 'react'

export default function Forms() {

const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [email, setEmail] = useState('')


    return (
        <div>
            
            <div className="container">
                <div className='row'>
                    <div className="col-lg-8 m-auto">
                        <form className="form-horizontal shadow p-5 mb-5 bg-body rounded">
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="firstName">First Name :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="FirstName" />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label className="control-label col-sm-2" htmlFor="lastName">Last Name :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label className="control-label col-sm-2" htmlFor="email">Email :</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                                </div>
                            </div>
                         
                            <div className="form-group mt-3">
                                 
                                    <button type="button" className="btn btn-success">Submit</button>
                                
                            </div>
                        </form>
                    </div>

                </div>

            </div>
          
        </div>
           


    )
}
