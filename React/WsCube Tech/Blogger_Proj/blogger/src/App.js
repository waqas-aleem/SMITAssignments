import React from 'react'
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Post from './Components/Post';
import Contact from './Components/Contact';
function App() 
{
  return (
    <div>

<Router>
<Navbar/>
        
        <Routes>
       

        <Route path="/about" element={<><Header className="page-heading" title="About Us" subHeadClass="subheading" subhead="This is what I do." img="about-bg.jpg"/><About/></>} />
         
        <Route  path="/post" element={<><Header className="post-heading" subHeadClass="meta" subhead="Posted by Start Bootstrap on August 24, 2021" title="Man must explore, and this is exploration at its greatest" img="post-bg.jpg" subPara="Problems look mighty small from 150 miles up" /><Post/></>}  />
        

         
        <Route  path="/contact" element={<><Header className="page-heading" subHeadClass="subheading" subhead="Have questions? I have answers." title="Contact Us" img="contact-bg.jpg" /><Contact/></>}  />
        

        
        <Route exact path="/" element={<><Header className="site-heading" subhead="A Blog Theme by Start Bootstrap" title="Clean Blog" img="home-bg.jpg" /><Home/></>}  />

        <Route path='*' element={<><Header className="page-heading" title="404 Page Not Found" img="404-bg.jpg" /></>} />


        </Routes>
       
        
        
        
      
<Footer />
</Router>
      
    </div>
  );
}

export default App;
