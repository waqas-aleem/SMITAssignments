
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import '../../App.css';
import Button from '../buttons/Button';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { doAddEmployee,doAddClick,doHideClick } from '../../store/actions/EmployeeActions'
export default function EmployeeForm() {

  const dispatch = useDispatch()

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const isUpdate = useSelector((store)=>store.EmployeeReducer.isUpdate)
  const isAdd  = useSelector((store)=>store.EmployeeReducer.isAdd)
  // const [isAdd, setisAdd] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)
  const isView  = useSelector((store)=>store.EmployeeReducer.isView)
  const formHeader  = useSelector((store)=>store.EmployeeReducer.formHeader)

  const onAddHandler = () => {

    dispatch(doAddClick())
    setfirstName('')
    setlastName('')
    setEmail('')
    // setIsUpdate(false)
    // setisView(false)
  }

  const onHideFormHandler = () => {

    dispatch(doHideClick())
    setfirstName('')
    setlastName('')
    setEmail('')
    // setIsUpdate(false)
    // setisView(false)
  }
  const onCtaUpdate = ()=>{

  }
  const onSubmitHandler = () => {
    if (!firstName || !lastName || !email) {
      toast.error('All Fields are required', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true

      });
      return;
    }

    let employee = {
      uid: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    // console.log("employee from comp",employee);
    dispatch(doAddEmployee(employee))
    // actions
    //setEmployees([...employees, employee])

    setfirstName('')
    setlastName('')
    setEmail('')
    // setIsUpdate(false)
    toast.success('Added successfully!',
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true

      });

  }
  const onViewClick = (item) => {

    setUpdateUid(item.uid)
    setfirstName(item.firstName)
    setlastName(item.lastName)
    setEmail(item.email)
    setisView(true)
    setisAdd(true)
    setIsUpdate(false)
    setformHeader('Employee View Only')
  }
  return (
    <div>
      <ToastContainer theme="colored" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            {isAdd ?
              <div><Button onClick={onHideFormHandler} classes={"btn btn-dark"} text={"Hide Form"} />
                <div className="container mt-1">
                  <div className='row'>
                    <div className="col-lg-8 m-auto">

                      <form className="form-horizontal shadow p-5 mb-5 bg-body rounded">
                        <h1>{formHeader}</h1>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="firstName">First Name :</label>
                          <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstName" value={firstName} placeholder="Enter First Name" name="FirstName" onChange={(e) => setfirstName(e.target.value)} />
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <label className="control-label col-sm-2" htmlFor="lastName">Last Name :</label>
                          <div className="col-sm-8">
                            <input type="text" onChange={(e) => setlastName(e.target.value)} className="form-control" value={lastName} id="lastName" placeholder="Enter Last Name" name="lastName" />
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <label className="control-label col-sm-2" htmlFor="email">Email :</label>
                          <div className="col-sm-8">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" value={email} placeholder="Enter Email" name="email" />
                          </div>
                        </div>

                        <div className="form-group mt-3">

                          {isUpdate ?
                            <button type="button" style={{ backgroundColor: "#10a5bb", color: "white" }} onClick={onCtaUpdate} className="btn btn-primary">Update</button>
                            :
                            <>
                              {
                                !isView ?
                                  <button type="button" onClick={onSubmitHandler} className="btn btn-success">Submit</button>
                                  :

                                  <button type="button" onClick={() => setisAdd(false)} className="btn btn-info">Cancel</button>





                              }
                            </>





                          }



                        </div>
                      </form>
                    </div>

                  </div>

                </div>
              </div>

              :
              <Button onClick={onAddHandler} classes={"btn btn-primary"} text={"Add Employee"} />



            }




          </div>
        </div>
      </div>
    </div>
  )
}
