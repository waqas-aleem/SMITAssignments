import React from 'react'
export default function Main() {
    return (
        <div style={{ backgroundColor: "#ffff" }}>
            <div className="container m-0 p-0">
                <div className="row mt-4 position-relative">
                  
                    <div className='col-md-8'>

                        <h3 className='d-inline-block '>My Day</h3>
                        <span className='position-absolute' style={{ left: "123px" }}>.  .  .</span>
                        <br />
                        <span>Monday, March 7</span>
                    </div>
                    <div className='col-md-4'>
                        <div className="row">
                            <div className='col-md-6 text-md-end'>
                                <i className="fal fa-sort-alt" style={{ fontSize: "25px", color: "grey" }}></i>
                                <span style={{ color: "grey" }}>Sort</span>

                            </div>
                            <div className='col-md-6 text-md-end'>
                                <i className='bx bx-bulb' style={{ fontSize: "25px", color: "grey" }}></i>

                                <span style={{ color: "grey" }}>Suggestions</span>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="row pt-md-2" style={{ borderRadius: "5px" }}>

                    <div className="col-md-12" style={{ border: "1px solid #f3f2f1", borderRadius: "5px", marginBottom: "0.5px" }}>
                        <div className="row" style={{ backgroundColor: "#f3f2f1" }}>
                            <div className="col-md-1 text-md-center" >
                                <label htmlFor="floatingInput">

                                    <i className="icon fontIcon ms-Icon ms-Icon--Add iconSize-24" style={{ color: "grey", padding: "17px" }} aria-hidden="true"></i>


                                </label>

                            </div>
                            <div className="col-md-11" style={{ color: "grey" }}>
                                <div className="form-floating">
                                    <input type="text" style={{ border: "1px solid #f3f2f1", backgroundColor: "#f3f2f1", borderRadius: "5px", marginBottom: "0px" }} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Add a task</label>
                                </div>

                            </div>
                        </div>



                    </div>







                </div>

            </div>

            <div className="container m-0 p-0">
                <div className='row' style={{ backgroundColor: "#f4f6ff", border: "1px solid #f4f6ff", borderRadius: "5px" }} >

                    <div className="col-md-1 d-flex justify-content-center align-items-center mb-4 mt-2">
                        <i className="far fa-circle" style={{ fontSize: "20px", color: "#416de1" }}></i>
                    </div>
                    <div className="col-md-10" style={{ backgroundColor: "#f4f6ff", paddingLeft: "20px" }}>
                        <span style={{ fontSize: "18px" }}>test</span>
                        <br />
                        <span style={{ fontSize: "12px" }}>Tasks</span>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="fal fa-star"></i>
                    </div>
                </div>
                <div className='row mt-3' >

                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="far fa-circle" style={{ fontSize: "20px", color: "#416de1" }}></i>
                    </div>
                    <div className="col-md-10 " style={{ paddingLeft: "20px" }}>
                        <span style={{ fontSize: "18px" }}>test</span>
                        <br />
                        <span style={{ fontSize: "12px" }}>Tasks</span>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="fal fa-star"></i>
                    </div>
                </div>
            </div>


            <hr />
            <div className='container m-0 p-0' >
                <div className="row mt-3">
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="far fa-chevron-down "></i>
                    </div>
                    <div className="col-md-11">
                        <span><b className='me-2'>Completed</b> 1</span>
                    </div>
                </div>

            </div>

            <div className="container m-0 p-0">
                <div className="row mt-3">
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="fas fa-check-circle" style={{ fontSize: "20px", color: "#416de1" }}></i>

                    </div>
                    <div className="col-md-10" >
                        <span style={{ fontSize: "18px" }}><s>test2</s></span>
                        <br />
                        <span style={{ fontSize: "12px" }}>Tasks</span>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="fal fa-star"></i>
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />





        </div>
    )
}
