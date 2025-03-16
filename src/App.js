
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import React,{useState} from 'react';
import {  Routes, Route, BrowserRouter as Router, } from "react-router-dom";


function App() {

  const [mode,setMode] =useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";  
      showAlert("dark mode enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"; 
      showAlert("Light mode enabled","success");
    }
  }

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);      
    }, 1500);
    
  }

  return (
   
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} ></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
   
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/textUtils" element={<TextForm />}/>
          <Route path="/aboutUs" element={<AboutUs/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
  
      {/* <TextForm defaultContent={"Play with the Text Here :)"} mode={mode} showAlert={showAlert}></TextForm> */}
      {/* <AboutUs></AboutUs> */}
    </div>
    </Router>
  );
}

export default App;
