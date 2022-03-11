
import './App.css';

function App() {
  return (
    <div  >
        
      <div className="container-fluid">
      
        <div className="row" style={{backgroundColor: "#0078D7"}}>
          <div className="col-lg-1 text-lg-center">
          <button style={{border:"none",backgroundColor: "#0078D7", color:"white" }}><i className='bx bxs-grid fs-5' >
         </i></button>
        
          </div>
          <div className="col-lg-1 d-flex align-items-center">
                <p className='text-white mt-2 fs-5'>To Do</p>
            </div>
        
          <div className="col-lg-6 w-lg-25 m-auto">
            <div className="search"> <i class="fal fa-search"></i> 
            <input type="text" className="form-control  w-75" style={{backgroundColor : "#c7def6"}}/> 
            </div>
          </div>
          <div className="col-lg-2 mx-1">
            <button style={{border:"none",backgroundColor: "#0078D7", color:"white",
               fontSize: "31px",     height: "100%"}}><i class="fal fa-cog"></i></button>
          
          <button style={{border:"none",backgroundColor: "#0078D7", color:"white",
               fontSize: "31px",     height: "100%"}}>
          <i class='bx bx-question-mark' ></i>
           </button>
          <button style={{border:"none",backgroundColor: "#0078D7", color:"white",
               fontSize: "31px",     height: "100%"}}>
          <i class="fal fa-megaphone"></i>
          </button>
          
            </div>
        </div>
      </div>

    </div>

  );
}

export default App;
