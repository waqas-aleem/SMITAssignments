import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
     <>
      <Navbar title="TextUtils" aboutText="About" />
      <TextForm heading="Enter the text to analyze"/>
     </>
  );
}

export default App;
