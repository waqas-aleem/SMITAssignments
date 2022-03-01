//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
 import About from './pages/About Us/About'
 import Footer from './pages/Footer/Footer'
 import Services from './pages/Services/Services'
import BottomComp from './components/bottom/BottomComp.js';
import Form from './components/form/Form';
import ConsultationComp from './consult/ConsultationComp';
function App() {
  return (
        <div>

           <Home/>
          <About/>
          <Services/>
          <ConsultationComp/>
          <Form/>
          <BottomComp/>
          <Footer/>
        </div>


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
