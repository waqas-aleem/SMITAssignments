import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

 
 

export default function App() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [className, setClassName] = useState('')

  const [students, setStudents] = useState([])


  const [isUpdate, setIsUpdate] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)

  const onSubmitHandler = () => {
    console.log('submit button clicked');
    if (!userName || !email || !rollNo || !className) {
      alert('All inputs are required')
      return
    }

    // do some logics with the form data
    console.log('Values', userName, email, rollNo, className)

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

  const onDeleteHandler = (uid) => {

    console.log('email', uid);

    let newStudents = students.filter((student) => student.uid !== uid)

    setStudents(newStudents)

  }

  const onUpdateHandler = (item, index) => {
    setClassName(item.className)
    setUserName(item.name)
    setRollNo(item.rollNo)
    setEmail(item.email)
    setUpdateUid(item.uid)
    setIsUpdate(true)
  }

  const onCtaUpdate = () => 
  {
    console.log('onCtaUpdate');

    let student = {
      uid: uuidv4(),
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className
    }


    let newStudents = students.map((item,index) => {
      if (item.uid ===  updateUid) {
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


  return (
    <div>
      <h1>Student SignUp Form</h1>
      <div>Name: <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='enter your name' type='text' /> </div>
      <div>Email: <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter your Email' type='text' /> </div>
      <div>Roll No.: <input onChange={(e) => setRollNo(e.target.value)} value={rollNo} placeholder='enter your Roll No.' type='text' /> </div>
      <div>Class: <input onChange={(e) => setClassName(e.target.value)} value={className} placeholder='enter your Class' type='text' /> </div>
      {isUpdate ?
        <button onClick={onCtaUpdate}>Update</button> :
        <button onClick={onSubmitHandler}>Submit</button>
      }


      <h1>List of Students</h1>

      <table >
        <thead>
        <tr className='customTable'>
          <th>No.</th>
          
          <th>Name</th>
          <th>Email</th>
          <th>Roll No.</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
        </thead>

        {
          students.map((item, index) => {
            return (
              <tbody key={index}>
              <tr  className='customTable'>
                <td>{index + 1}</td>
             
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rollNo}</td>
                <td>{item.className}</td>
                <td>
                  <button onClick={() => onDeleteHandler(item.uid)}>Delete</button>
                  <button onClick={() => onUpdateHandler(item, index)}>Update</button>
                </td>
              </tr>
              </tbody>
            )
          })
        }


      </table>



    </div>
  )
}