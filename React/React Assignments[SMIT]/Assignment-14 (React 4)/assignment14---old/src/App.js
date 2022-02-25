//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Rep from './pages/Reputation/Rep'
import AboutUs from './pages/About Us/AboutUs'
import Form from './components/form/Form'
function App() {
  return (
        <>
        
          <Home/>
          <Rep/>
          <AboutUs/>
          <Form/>

        </>


    // <div>
    //   <span className="iconify" data-icon="ri:customer-service-2-fill"></span>
    //   <span className="iconify" data-icon="ic:twotone-design-services"></span>
    //   <button><span className="iconify mt-2" data-icon="ep:back"></span> Back</button>
    //   <button> Next<span className="iconify mt-2" data-icon="ep:back" data-rotate="180deg"></span></button>
      
    //   <span className="iconify" data-icon="ep:back" data-rotate="180deg"></span>
    // </div>
  );
}

export default App;
