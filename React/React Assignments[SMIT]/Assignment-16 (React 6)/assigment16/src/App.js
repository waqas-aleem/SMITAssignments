import './App.css';
import LeftAside from './components/aside/LeftAside';
import RightAside from './components/aside/RightAside';
import Main from './components/maincontent/Main';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div >
     <NavBar/>
     <div className="container-fluid" >
       <div className="row" >
         <div className="col-md-2" style={{ backgroundColor: "#f3f2f1" }}>
           <LeftAside/>
         </div>
         <div className="col-md-7" style={{padding: "20px"}}>
         <Main/>
         </div>
         <div className="col-md-3" style={{ backgroundColor: "#f3f2f1" }}>
           <RightAside/>

         </div>
       </div>
     </div>
     
    </div>

  );
}

export default App;
