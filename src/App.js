import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About";
import Alert from "./components/Alert";
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const[Mode,setMode] = useState('light');//whether dark in enabled or not
  const[alert,setalert] = useState(null);
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(Mode === 'dark' ){
      setMode('light');
      showalert('light mode is enabled','success');
      document.body.style.backgroundColor = 'white';
      
      
    }
    else{
      setMode('dark');
      setInterval(() => {
        document.title = 'Text utils is amazing'
      }, 1500);
      setInterval(() => {
        document.title = 'Install text utils now'
      }, 2000);
      showalert('dark mode is enabled','success');
      document.body.style.backgroundColor = '#061f4f';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "My-app" mode = {Mode} toggleMode = {toggleMode}/>
    < Alert Alert =  {alert}/>
    {/* <Navbar title = "My-app" aboutText = "About us"/> */}
    {/* <Navbar/> */}
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={<TextForm heading = "enter the text to analyse " mode = {Mode} showalert = {showalert}/>}/>
          <Route exact path="/about" element={<About  mode = {Mode}/>}/>
    </Routes>
    {/* <TextForm heading = "enter the text to analyse " mode = {Mode} showalert = {showalert}/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
