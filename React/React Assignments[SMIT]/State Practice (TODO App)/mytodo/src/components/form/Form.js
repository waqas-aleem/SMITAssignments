import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const data = [
  {
    uid: uuidv4(),
    name: 'waqas',
    email: 'waqas.aleem1990@gmail.com',
    rollNo: '7221',
    className: 'C'
  },

  {
    uid: uuidv4(),
    name: 'Abair',
    email: 'abair@gmail.com',
    rollNo: '7223',
    className: 'C'
  },
  {
    uid: uuidv4(),
    name: 'Hassan',
    email: 'hassan@gmail.com',
    rollNo: '7220',
    className: 'C'
  },
]

export default function Form() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [className, setClassName] = useState('')

  const [students, setStudents] = useState(data)


  const [isUpdate, setIsUpdate] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)

  const onSubmitHandler = () => {

    if (!userName || !email || !rollNo || !className) {
      alert('All inputs are required')
      return
    }
    let student = {
      uid: uuidv4(),
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className
    }

    setStudents([...students, student])

    setClassName('')
    setUserName('')
    setRollNo('')
    setEmail('')
  }
  const onUpdateHandler = (item) => 
  {
    setClassName(item.uid)
    setClassName(item.className)
    setUserName(item.name)
    setRollNo(item.rollNo)
    setEmail(item.email)
    setUpdateUid(item.uid)
    setIsUpdate(true)
  }
  const onCtaUpdate = () => 
  {

    let student = {
      uid: updateUid,
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className
    }


    let newStudents = students.map((item) => {
      if (item.uid === updateUid) {
        return student
      }
      else {
        return item
      }
    })

    setStudents(newStudents)

    setClassName('')
    setUserName('')
    setRollNo('')
    setEmail('')
    setIsUpdate(false)



  }
  const onDeleteHandler = (item) => {



    let newStudents = students.filter((student) => student.uid !== item.uid)

    setStudents(newStudents)

  }
  return (
    <div>
      <div className="container ">
        <div className="row m-3 ">
          <div className="col-md-6 p-3 border border-1">
            <h1 className='text-center' >Student SignUp Form</h1>
            <form className='w-100'>

              <table className='d-flex justify-content-center' >

                <tbody    >

                  <tr>
                    <th><label htmlFor="userName"> User Name : </label></th>
                    <td>

                      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} id="userName" className='mx-1 my-2' placeholder='Enter Your Name ' />
                    </td>

                  </tr>

                  <tr>
                    <th><label htmlFor="userEmail">Email : </label></th>
                    <td>

                      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="userEmail" className='mx-1 my-2' placeholder='Enter Your Email ' />
                    </td>

                  </tr>

                  <tr>
                    <th><label htmlFor="userRollNo"> Roll No. : </label></th>
                    <td>

                      <input type="text" id="userRollNo" onChange={(e) => setRollNo(e.target.value)} value={rollNo} className='mx-1 my-2' placeholder='Enter Your Roll No. ' />
                    </td>

                  </tr>
                  <tr>
                    <th><label htmlFor="className"> Class Name  : </label></th>
                    <td>

                      <input type="text" id="className" onChange={(e) => setClassName(e.target.value)} value={className} className='mx-1 my-2' placeholder='Enter Your Class Name ' />
                    </td>

                  </tr>



                </tbody>

              </table>



              <div className="row">
                <div className="col-md-12 text-center ">
                  {isUpdate ? <button type="button" onClick={onCtaUpdate} className="btn btn-primary w-50">Update</button>
                    : <button type="button" onClick={onSubmitHandler} className="btn btn-primary w-50">Submit</button>}



                </div>
              </div>

            </form>



          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Table Data</h1>
            <table>
              <thead className='text-center'>
                <tr>
                  <th className='border border-1 p-3'>
                    No.
                  </th>
                  <th className='border border-1 p-3'>
                    User Name
                  </th>
                  <th className='border border-1 p-3'>
                    Email
                  </th>
                  <th className='border border-1 px-5'>
                    Roll No.
                  </th>
                  <th className='border border-1 p-3'>
                    Class Name
                  </th>
                  <th className='border border-1 p-3'>
                    Action
                  </th>
                </tr>
              </thead>

              {
                students.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr >
                        <td className='border border-1 p-3'>{index + 1}</td>

                        <td className='border border-1 p-3'>{item.name}</td>
                        <td className='border border-1 p-3'>{item.email}</td>
                        <td className=' border border-1 p-3 text-center'>{item.rollNo}</td>
                        <td className='border border-1 p-3 text-center'>{item.className}</td>
                        <td className='border border-1 p-3 text-center'>
                          <button className='btn btn-danger mx-3' onClick={() => onDeleteHandler(item)}>Delete</button>
                          <button className='btn btn-success' onClick={() => onUpdateHandler(item)} >Update</button>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              }

            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
