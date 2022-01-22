import Navbar from './Components/Navbar';
import Section from './Components/Section';
import FindSection from './Components/FindSection';
import Footer from './Components/Footer';
import TalkArea from './Components/TalkArea';
import Trending from './Components/Trending';
import Testinomial from './Components/Testinomial';

import './App.css';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Section/>
        <FindSection />
        <Trending/>
        <Testinomial/>
        <TalkArea/>
        <Footer/>
      </div>
        
    
    </>
  );
}

export default App;
