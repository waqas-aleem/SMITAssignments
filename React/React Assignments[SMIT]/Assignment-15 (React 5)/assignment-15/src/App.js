import React, { useState } from 'react'
import './App.css';
import Button from './components/buttons/Button';
import { v4 as uuidv4 } from 'uuid';
const employeeTempDate = [
  {
    uid:uuidv4(),
    firstName:"Muhammad Waqas",
    lastName :"Aleem",
    email:"waqas.aleem1990@gmail.com"
  },
  {
    uid:uuidv4(),
    firstName:"Hassan ",
    lastName :"Ali Khan",
    email:"hassanalikhan502@gmail.com"
  },
  {
    uid:uuidv4(),
    firstName:"Muhammad Abair",
    lastName :"Mutarraf",
    email:"abair.mutarraf@gmail.com"
  },

]

function App() {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [employees, setEmployees] = useState(employeeTempDate)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isAdd, setisAdd] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)
  const [isView, setisView] = useState(false)
  const [formHeader, setformHeader] = useState('Add Employee')

  const onAddHandler = () => {

    setisAdd(!isAdd);
    setfirstName('')
    setlastName('')
    setEmail('')
    setIsUpdate(false)
  }

  const onSubmitHandler = () => {
    if (!firstName || !lastName || !email) {
      alert("All Inputs are required!")
      return;
    }

    let employee = {
      uid: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    setEmployees([...employees, employee])
    setfirstName('')
    setlastName('')
    setEmail('')
    setIsUpdate(false)

  }
  const onDeleteHandler = (item) => {

    let newEmployee = employees.filter((e) => e.uid !== item.uid)

    setEmployees(newEmployee)
    setformHeader('Add Employee')
    setfirstName('')
    setlastName('')
    setEmail('')
    setIsUpdate(false)

  }
  const onUpdateHandler = (item) => {
    setUpdateUid(item.uid)
    setfirstName(item.firstName)
    setlastName(item.lastName)
    setEmail(item.email)
    setIsUpdate(true)
    setisAdd(true)
    setformHeader('Employee Data Update')
  }

  const onCtaUpdate = () => {

    let employee = {
      uid: updateUid,
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    let newEmployees = employees.map((item) => {
      if (item.uid === updateUid) {
        return employee
      }
      else {
        return item
      }
    })

    setEmployees(newEmployees)
    setfirstName('')
    setlastName('')
    setEmail('')
    setIsUpdate(false)

    setisView(false)

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
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            {isAdd ?
              <div><Button onClick={onAddHandler} classes={"btn btn-primary"} text={"Hide Form"} />
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
                                :''
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


      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 m-auto">
          <h1 className='text-center'>Employees List </h1>
            <table className="table table-striped">
              <thead>
                <tr>

                  <th className='border border-1 p-3'>
                    Employee First Name
                  </th>
                  <th className='border border-1 p-3'>
                    Employee Last Name
                  </th>
                  <th className='border border-1 p-3'>
                    Employee Email Id
                  </th>

                  <th className='border border-1 p-3'>
                    Action
                  </th>
                </tr>
              </thead>


              <tbody>

                {employees.map((item, index) => {
                  return (

                    <tr key={index} className="border border-1">

                      <td className="border border-1">{item.firstName}</td>
                      <td className="border border-1">{item.lastName}</td>
                      <td className="border border-1">{item.email}</td>
                      <td className="border border-1 mx-2">
                        <button onClick={() => onUpdateHandler(item)} className='btn' style={{ backgroundColor: "#10a5bb", color: "white" }} >Update</button>
                        <button onClick={() => onDeleteHandler(item)} className='btn btn-danger mx-md-0 mx-lg-3'>Delete</button>
                        <button onClick={() => onViewClick(item)} className='btn' style={{ backgroundColor: "#10a5bb", color: "white" }} >View</button>
                       
                       
                      </td>
                    </tr>

                  )
                })
                }

              </tbody>
            </table>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
