import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
export default function TalkArea() {
  return (
    <>
      <div className=" container-fluid talkarea ">
        <div className="container-fluid">
          <div className="row " >
            <div className="col-md-12 mt-5">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-8">
                    <p className="talkareaHeading">Talk to a Redfin Agent</p>
                    <p className="talkareaSubhead">
                      Start your search with an expert local agent—there's no
                      pressure or obligation.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="talkareaheading2 text-center-md">
                      Where are you searching for homes?
                    </p>
                    <div className="row md-d-flex justify-content-md-center align-items-md-center rows">
                      <div className="col-md-12 md-d-flex justify-content-md-center align-items-md-center">
                        <div
                          className="card w-75--md"
                          style={{ backgroundColor: "#0F2A47" }}>
                          <div>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control py-3"
                                placeholder="City, Address, ZIP"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                              />
                              <button
                                className="btn btn-primary border-rad px-4"
                                type="button"
                                id="button-addon2">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
