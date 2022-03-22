import React from 'react'

export default function RightAside() {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-3 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
                                <div className="round" style={{ marginTop:"5px", color: "#416de1" }}>
                                                <input type="checkbox" id="c2" />
                                                <label htmlFor="c2"></label>
                                            </div>

                                

                                </div>
                                <div className="col-md-8">
                                    <span style={{ fontSize: "20px", fontWeight: "600" }}>test3</span>
                                </div>

                                <div className="col-md-2">
                                    <i className="fal fa-star"></i>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <i className="icon fontIcon ms-Icon ms-Icon--Add iconSize-24" style={{ color: "#416de1" }} aria-hidden="true"></i>

                                </div>
                                <div className="col-md-10">
                                    <span style={{ color: "#416de1", fontWeight: "500" }}>Add step</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
           
            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-2 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
                                <i className='bx bx-sun ' style={{ paddingTop: "5px", color: "#416de1",    fontSize: "18px" }}></i>
                                    

                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "#416de1"}}>Add to My Day</span>
                                </div>
 
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>

            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-2 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
                          
                                <i className='bx bx-bell' style={{ paddingTop: "5px", color: "grey",    fontSize: "20px" }}></i>

                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Remind me</span>
                                    <hr  className='mt-3'/>
                                </div>
                                    
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-2">
                                <i className="far fa-calendar-alt" style={{ paddingTop: "5px", color: "grey",    fontSize: "20px" }}></i>
                         

                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Add due date</span>
                                    <hr  className='mt-3'/>
                                </div>
                                    
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-2">
                                
                                <i className="icon fontIcon ms-Icon ms-Icon--RecurringEvent iconSize-24" aria-hidden="true" style={{  color: "grey",    fontSize: "20px" }}></i>

                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Repeat</span>
                                    
                                </div>
                                    
                            </div>
                        </div>

                    </div>
                </div>
              
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-2 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
 
                                <i className="far fa-tag" style={{ paddingTop: "5px", color: "grey",    fontSize: "20px", transform:"rotate(60deg)"}}></i>

                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Pick a category</span>
                                </div>
 
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-2 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
 
                                {/* <i className="far fa-tag" ></i> */}
                                <i className="far fa-paperclip" style={{ paddingTop: "5px", color: "grey",    fontSize: "20px", transform:"rotate(-45deg)"}}></i>
                                </div>
                                <div className="col-md-10">
                                    <span style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Add file</span>
                                </div>
 
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>

            <div className="container-fluid" style={{ backgroundColor: "#f3f2f1" }}>
                <div className="row">
                    <div className="col-md-12 mt-2 shadow p-3 mb-2 bg-body">
                        <div className="container-fluid">
                            <div className="row p-3">
                                
                                <div className="col-md-12 mb-2 ">
                                    <span   style={{ fontSize: "18px", fontWeight: "500", color: "grey"}}>Add Note</span>
                                </div>
 
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
