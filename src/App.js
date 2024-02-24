 
import './App.css';
 
import Navbar from './compoents/Navbar';
import Home from './compoents/Home';
import About from './compoents/About';
import Skills from './compoents/Skills';
import Project from './compoents/Project';
import Contact from './compoents/Contact';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const import { originalName as alias } from 'module'
// const image='product-2.jpeg'
function App() {
  return (
   <div className='bg-white dark:bg-black'>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact/>
   </div>
   
  );
}

export default App;
