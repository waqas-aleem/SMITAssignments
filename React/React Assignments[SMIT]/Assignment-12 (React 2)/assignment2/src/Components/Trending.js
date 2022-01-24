import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import image1 from "../assets/image.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";

export default function Trending() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <p className="tendingHeading">Our trending latest proparty</p>
              <p className="trendingPara">
                Our unique process gives you peace of mind from home rent
                <br /> to services
              </p>
            </div>
           
            <div className="col-md-6 text-md-end">
                        <span className="dropdown me-4" >
                            <button className="btn btn-default border border-1 px-4 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Property type   
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </span>
              <button
                type="submit"
                className="btn btn-primary mt-3 mb-3"
                style={{ width: "164px", height: "40px" }}
              >
                See All Property
              </button>
            </div>
          </div>

          {/* carosuel */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
           
              <li
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{
                  width: "12px",
                  height: "12px",
                  marginTop: "5px",
                  border: "1px solid black",
                }}
              >

              </li>

              <li
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                style={{
                  width: "12px",
                  height: "12px",
                  marginTop: "5px",
                  border: "1px solid black",
                
                }}
              ></li>
              <li
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                style={{
                  width: "12px",
                  height: "12px",
                  marginTop: "5px",
                  border: "1px solid black",
                }}
              ></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image1}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $259,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  backgroundColor: "#D7EAFF",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Case Alda
                            </p>
                            <p className="trendingSubPara m-2">
                              Co Rd Tribune Tribune
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-primary trendingBtn m-3"
                              style={{ width: "84px", height: "30px" }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image2}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $229,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Langes Beach House
                            </p>
                            <p className="trendingSubPara m-2">
                              375 Highland Ave NE UNIT 1002
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image3}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $289,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Supper Delax Home
                            </p>
                            <p className="trendingSubPara m-2">
                              1398 Lynford Dr SW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image4}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $329,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Clinton Villa
                            </p>
                            <p className="trendingSubPara m-2">
                              675 Albert St NW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image1}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $259,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Case Alda
                            </p>
                            <p className="trendingSubPara m-2">
                              Co Rd Tribune Tribune
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image2}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $229,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Langes Beach House
                            </p>
                            <p className="trendingSubPara m-2">
                              375 Highland Ave NE UNIT 1002
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image3}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $289,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Supper Delax Home
                            </p>
                            <p className="trendingSubPara m-2">
                              1398 Lynford Dr SW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image4}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $329,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Clinton Villa
                            </p>
                            <p className="trendingSubPara m-2">
                              675 Albert St NW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image1}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $259,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Case Alda
                            </p>
                            <p className="trendingSubPara m-2">
                              Co Rd Tribune Tribune
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image2}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $229,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Langes Beach House
                            </p>
                            <p className="trendingSubPara m-2">
                              375 Highland Ave NE UNIT 1002
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image3}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $289,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Supper Delax Home
                            </p>
                            <p className="trendingSubPara m-2">
                              1398 Lynford Dr SW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Card */}
                    <div className="col-md-6 ">
                      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={image4}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "216px", height: "216px" }}
                            />
                          </div>
                          <div className="col-md-8 mt-1 position-relative">
                            <p className="tendingCardPrice mx-2 d-inline-block">
                              $329,000
                            </p>
                            <div className="d-inline-block">
                              <i
                                className="fa fa-heart-o mb-2 position-absolute border border-1 rounded p-2"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  color: "#2289FF",
                                  top: "0px",
                                  right: "36px",
                                }}
                              ></i>
                            </div>

                            <p className="trendingCardheading mx-2">
                              Clinton Villa
                            </p>
                            <p className="trendingSubPara m-2">
                              675 Albert St NW, Atlanta
                            </p>
                            <br />
                            <i
                              className="fa fa-bed mx-3"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara">2 Beds</span>
                            <i
                              className="fa fa-bath ms-5"
                              aria-hidden="true"
                              style={{ color: "#2289FF", fontSize: "18px" }}
                            ></i>
                            <span className="trendingIconPara ms-2">
                              2 Bath
                            </span>
                            <br />
                            <button
                              type="button"
                              className="btn btn-secondary bg-white   trendingBtn m-3"
                              style={{
                                width: "84px",
                                height: "30px",
                                border: "1px solid #2289FF",
                                color: "#2289FF",
                              }}
                            >
                              View Details
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
          {/* carosuel  */}
        </div>
      </div>
    );
}
