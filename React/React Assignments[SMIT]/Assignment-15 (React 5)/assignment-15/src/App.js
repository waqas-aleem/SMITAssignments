import React,{useState} from 'react'
import './App.css';
import Button from './components/buttons/Button';
import Forms from './components/forms/Forms';
 
function App() {
  const [isAdd, setisAdd] = useState(false)
  const onAddHandler = () => {

      setisAdd(!isAdd);




  }
  const onHideForm = ()=>
  {
    setisAdd(false);

  }
  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-md-12">
            
              <h1 className='text-center'>Employees List </h1>
              
            {!isAdd ?
              <Button onClick={onAddHandler} classes={"btn btn-primary"} text={"Add Employee"}/>
              :
              <Button onClick={onHideForm} classes={"btn btn-primary"} text={"Hide Form"}/>

            }

           
            

          </div>
        </div>
      </div>
      {isAdd ?    <div className="container">
        <div className="row">
          <div className="col-md-12">
          <Forms/>
          </div>
        </div>
      </div> : ''}
   
      
      
    </div>
  );
}

export default App;
