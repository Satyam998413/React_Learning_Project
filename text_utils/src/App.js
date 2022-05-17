// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route,Switch,Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
 const [alert, setAlert] = useState(null);

 const showAlert=(msg,type)=>{
   setAlert({msg:msg,type:type,});
   setTimeout(() => {
     setAlert(null);
   }, 1500);
 }
 

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="rgb(9, 168, 9)";
      showAlert("Dark Mode is Enabled","success");
      document.title="TextUtils:Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.background="white";
      showAlert("Light Mode is Enabled","success");
      document.title="TextUtils:Light Mode";
    }
  }
  return (
    
    <> 
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      <div className="container">
        <Textform showAlert={showAlert} mode={mode} heading="Enter Your's Texts Here to analyze below"/> 
        <About  mode={mode}/>
      </div>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
