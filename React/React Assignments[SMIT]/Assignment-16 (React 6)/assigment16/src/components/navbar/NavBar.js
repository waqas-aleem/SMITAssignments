import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbarbg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><button style={{ border: "none", backgroundColor: "#0078D7", color: "white" }}>
                        <i className='bx bxs-grid' ></i> <span className='mx-md-3'>To Do</span></button></a>

                    <form className="search m-auto ">
                        <input className="form-control me-2" type="search" aria-label="Search" />
                        <i className="fal fa-search"></i>

                    </form>
                    <div className='mx-md-3'>
                        <button style={{
                            border: "none", backgroundColor: "#0078D7", color: "white",
                            fontSize: "20px", height: "100%"
                        }}><i className="fal fa-cog" style={{fontSize: "25px"}}></i></button>
                    </div>
                    <div className='mx-md-3'>
                        <button style={{
                            border: "none", backgroundColor: "#0078D7", color: "white",
                            fontSize: "20px", height: "100%"
                        }}>
                            <i className='bx bx-question-mark' style={{fontSize: "25px"}} ></i>
                        </button>
                    </div>
                    <div className='mx-md-3'>
                        <button style={{
                            border: "none", backgroundColor: "#0078D7", color: "white",
                            fontSize: "20px", height: "100%"
                        }}>
                            <i className="fal fa-megaphone" style={{fontSize: "25px"}}></i>
                            <span className="translate-middle badge rounded-pill bg-dark">
                                3
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </div>

                    <button type='button' className='profilebtn' style={{padding:"5px 10px 6px"}}> RS </button>

                </div>
            </nav>

        </div>
    )
}
