import './App.css';
import RightAside from './components/aside/RightAside';
import Main from './components/maincontent/Main';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div >
     <NavBar/>
     <div className="container-fluid" >
       <div className="row" >
         <div className="col-md-2"></div>
         <div className="col-md-7">
         <Main/>
         </div>
         <div className="col-md-3">
           <RightAside/>

         </div>
       </div>
     </div>
     
    </div>

  );
}

export default App;
