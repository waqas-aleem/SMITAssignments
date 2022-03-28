import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { doDeleteEmployee,doUpdateEmployee,doUpdateClick } from '../../store/actions/EmployeeActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeDispay = React.memo(() =>{
 
  const dispatch   = useDispatch();
  const Employees  = useSelector((store)=> store.EmployeeReducer.employeeTempData);
  const formHeader = useSelector((store)=> store.EmployeeReducer.formHeader)

  const [firstName, setfirstName] = useState(useSelector((store)=>store.EmployeeReducer.firstName))
  const [lastName, setlastName] = useState(useSelector((store)=>store.EmployeeReducer.lastName))
  const [email, setEmail] = useState(useSelector((store)=>store.EmployeeReducer.email))
  const [updateUid, setUpdateUid] =useState(useSelector((store)=>store.EmployeeReducer.updateUid))

  const  isUpdate = useSelector((store)=>store.EmployeeReducer.isUpdate)
  const  isAdd    = useSelector((store)=>store.EmployeeReducer.isAdd)
  const  isView  = useSelector((store)=>store.EmployeeReducer.isView)

   const onUpdateHandler= (item)=>
   {
     console.log("Update Item :" ,item);
    setUpdateUid(item.uid)
    setfirstName(item.firstName)
    setlastName(item.lastName)
    setEmail(item.email)
    dispatch(doUpdateClick(item))
     
    
   

   }


   const onDeleteHandler = (item) => {

    dispatch(doDeleteEmployee(item))
    setfirstName('')
    setlastName('')
    setEmail('')
    
    
    toast.info('Deleted successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    
      });  

  }
   const onViewClick = () => {

   }
  return (

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

            {Employees.map((item, index) => {
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
  )
}
);
export default EmployeeDispay;
