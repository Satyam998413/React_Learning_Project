import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="grey";
    }
    else{
      setMode("light");
      document.body.style.background="white";
    }
  }
  return (
    <> 
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform heading="Enter Your's Texts Here to analyze below"/> 
        <About />
      </div>
    </>
  );
}

export default App;
