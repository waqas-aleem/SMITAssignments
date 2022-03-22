import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const data = [
    {
        uid:uuidv4(),
        taskName: 'test1'
    },
    {
        uid:uuidv4(),
        taskName: "test2"
    }
]
const dataComplete = [{

    compName:      "test3",
    checkedStatus: true

}]



let counter = 1;
function Main() {




    const [isChecked, setIsChecked] = useState(true)
    const [isComplete, setisComplete] = useState(false)
    const [constData, setconstData] = useState(data)
    const [addTaskName, setaddTaskName] = useState('')
    const [completeData, setcompleteData] = useState(dataComplete)
 
    const onUncheckBox = ()=>
    {
        
             setIsChecked(false)
          


    }
        


    const onAddHandler = () => {
        let addData = {
           
            taskName: addTaskName,

        }
        setconstData([...constData, addData])
        setaddTaskName('')

    }


    const handleChange = (item) => {

        if (window.confirm('Are you sure to complete this record?')) {
            let newData =
            {
                compName: item.taskName,
                checkedStatus:true
            }

            let newTasks = constData.filter((e) => e.uid !== item.uid)
            setconstData(newTasks)
            counter++;
            setcompleteData([...completeData, newData])
            setisComplete(false)
             


        }

    }






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


                <div className="row mb-md-2 pt-md-3" style={{ borderRadius: "5px" }}>

                    <div className="col-md-12 " style={{ border: "1px solid #f3f2f1", marginBottom: "0.5px" }}>
                        <div className="row pb-md-1" style={{ backgroundColor: "#f3f2f1" }}>

                            <div className="col-md-1 text-md-center" >

                                <label htmlFor="floatingInput">
                                    <a href="#floatingInput"  >
                                        <i className="icon fontIcon ms-Icon ms-Icon--Add iconSize-24"
                                            style={{ color: "grey", paddingTop: "20px" }} aria-hidden="true"></i>
                                    </a>

                                </label>


                            </div>
                            <div className="col-md-11" style={{ color: "grey" }}>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="form-floating">
                                            <input type="text" style={{ border: "1px solid #f3f2f1", borderRadius: "5px" }}
                                                className="form-control" id="floatingInput" placeholder="Add a Task"
                                                onChange={(e) => setaddTaskName(e.target.value)}
                                                value={addTaskName}
                                            />
                                            <label htmlFor="floatingInput">Add a Task</label>

                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className='btn btn-secondary mt-2 mb-1'
                                            onClick={() => onAddHandler()}>Add to Task</button>
                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>

                </div>



            </div>
            <div className='container'>

                {constData.map((item, index) => {
                    return (
                        <div key={index}>


                            <div className='row mt-3 onHoverClass' style={{ borderRadius: "5px" }} >

                                <div className="col-md-1 d-flex justify-content-center align-items-center mb-4 mt-2">
                                    <div className="round">
                                        <input type="checkbox" id={index}
                                            onChange={() => handleChange(item)}
                                            checked={isComplete} />
                                        <label htmlFor={index}></label>
                                    </div>
                                </div>


                                <div className="col-md-10 " style={{ paddingLeft: "20px" }}>
                                    <span style={{ fontSize: "18px" }}>{item.taskName}</span>
                                    <br />

                                    <span style={{ fontSize: "12px" }}>Tasks</span>

                                </div>

                                <div className="col-md-1 d-flex justify-content-center align-items-center">
                                    <button type='button' className='btn btn-default'>
                                        <i className="fal fa-star"></i>

                                    </button>

                                </div>

                            </div>


                        </div>
                    )
                }

                )
                }



            </div>



            <hr />
            <div className='container m-0 p-0' >
                <div className="row mt-3">
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                        <i className="far fa-chevron-down "></i>
                    </div>
                    <div className="col-md-11">
                        <span><b className='me-2'>Completed</b> {counter} </span>
                    </div>
                </div>

            </div>






            <div className="container">
                {completeData.map((item, index) => {
                    return (
                        <div key={index}>

                            <div className="row mt-3">
                                <div className="col-md-1 d-flex justify-content-center align-items-center">
                                     



                                        <div className="round">
                                            <input type="checkbox" checked={item.checkedStatus}
                                                id={"C" + index}
                                                onChange={()=>onUncheckBox} />
                                            <label htmlFor={"C" + index}></label>
                                        </div>
                                   



                                </div>
                                <div className="col-md-10" >
                                    <span style={{ fontSize: "18px" }}><s>{item.compName}</s></span>
                                    <br />
                                    <span style={{ fontSize: "12px" }}>Tasks</span>
                                </div>
                                <div className="col-md-1 d-flex justify-content-center align-items-center">
                                    <button type='button' className='btn btn-default'>
                                        <i className="fal fa-star"></i>
                                    </button>
                                </div>
                            </div>


                        </div>
                    )
                }

                )
                }
            </div>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />





        </div>
    )
}
export default Main;