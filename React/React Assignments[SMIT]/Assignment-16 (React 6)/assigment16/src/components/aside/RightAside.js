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

                                    <i className="far fa-circle" style={{ paddingTop: "8px", color: "#416de1" }}></i>

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
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 mt-1 shadow p-3 mb-5 bg-body">
                    <i className='bx bx-sun '></i>

                    </div>
                        </div>
                    </div>
                  
                </div>

            </div>
        </div>
    )
}
