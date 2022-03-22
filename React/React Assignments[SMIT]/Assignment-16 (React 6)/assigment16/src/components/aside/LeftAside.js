import React, { useState } from 'react'

export default function LeftAside() {

  const [isOpen, setisOpen] = useState(true)
  return (
    <div >
      

      <div className="container-fluid m-0 p-0" >
      <div className="row">
          <div className="col-md-12">
            <button className='btn btn-default'> 
            <i className='bx bx-menu' style={{ fontSize: "30px", color: "grey", marginTop: "30px" }}></i>
            </button>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px", backgroundColor: "#ededed", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-sun' style={{ fontSize: "20px", color: "grey" }} ></i>

          </div>
          <div className="col-md-8">
            <span style={{ color: "black" }}>My Day</span>
          </div>
          <div className="col-md-2 text-md-end">
            <span>2</span>

          </div>
        </div>

        <div className="row" style={{ marginTop: "0px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-star' style={{ fontSize: "20px", color: "grey" }} ></i>

          </div>
          <div className="col-md-8">
            <span style={{ color: "black" }}>Important</span>
          </div>
          <div className="col-md-2 text-md-end">
            <span>2</span>

          </div>
        </div>
        <div className="row" style={{ marginTop: "0px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-calendar' style={{ fontSize: "20px", color: "grey" }} ></i>

          </div>
          <div className="col-md-8">
            <span style={{ color: "black" }}>Planned</span>
          </div>
          <div className="col-md-2 text-md-end">
            <span>1</span>

          </div>
        </div>
        <div className="row" style={{ marginTop: "0px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i class="far fa-user-check" style={{ fontSize: "20px", color: "grey" }}></i>


          </div>
          <div className="col-md-10">
            <span style={{ color: "black" }}>Assigned to me</span>
          </div>

        </div>
        <div className="row" style={{ marginTop: "0px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-flag' style={{ fontSize: "20px", color: "grey" }} ></i>

          </div>
          <div className="col-md-10">
            <span style={{ color: "black" }}>Flagged email</span>
          </div>

        </div>

        <div className="row" style={{ marginTop: "0px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-home' style={{ fontSize: "20px", color: "grey" }} ></i>

          </div>
          <div className="col-md-8">
            <span style={{ color: "black" }}>Tasks</span>
          </div>
          <div className="col-md-2 text-md-end">
            <span>16</span>

          </div>
        </div>

        <div className="row" style={{ marginTop: "30px", padding: "10px" }}>
          <div className="col-md-2 d-flex align-items-center">
            <i className='bx bx-plus' style={{ fontSize: "20px", color: "#416de1" }} ></i>

          </div>
          <div className="col-md-8">
            <span style={{ color: "#416de1" }}>New list</span>
          </div>
          <div className="col-md-2 text-md-end">
            <span><i className="far fa-calendar-plus" style={{ color: "#416de1" }}></i></span>

          </div>
        </div>

      </div>

    </div>
  )
}
