import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';


function App() {
  return (
    <> 
      <Navbar title="TextUtils" abouttext="About Us" />
      <div className="container">
        <Textform heading="Enter Your's Texts Here to analyze below"/>
        <About />
      </div>
    </>
  );
}

export default App;
