import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Form from './components/Form';
import logo from './components/image/logo.jpg'
// import { ThemeProvider } from './components/ThemeContext';
import { ThemeContext } from './components/ThemeContext';
import ErrorBoundary from './ErrorBoundary';
import './index.css'
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  useEffect(() => {
          document.body.className = theme; 
      }, [theme]);

  return (
    <>
      {/* <ThemeProvider> */}
        <ErrorBoundary>
        <Router>
          <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark container-fluid' id='navbar'>
              <div className="container" style={{justifySelf:'center'}}>
                <Link to="/"><img src={logo} alt="" id='logoImg' /></Link>
                <div className="ms-auto">
                  <div className='d-flex'>
                    <div className="dropdown" id='smLink'>
                    <button className="btn btn-secondary dropdown-toggle" style={{transition:'0.5s ease-in-out'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                    <ul className="dropdown-menu bg-dark">
                      <Link to="/HomePage" className='dropdown-item' id='navLink' style={{margin:'10px'}}>Home</Link>
                      <Link to="/About" className='dropdown-item' id='navLink' style={{margin:'10px'}}>About</Link>
                      <Link to="/Form" className='dropdown-item' id='navLink' style={{margin:'10px'}}>Hire-Us</Link>
                    </ul>
                    </div>
                    <div id="bgLink">
                      <Link to="/HomePage" id='navLink' style={{margin:'10px'}}>Home</Link>
                      <Link to="/About" id='navLink' style={{margin:'10px'}}>About</Link>
                      <Link to="/Form" id='navLink' style={{margin:'10px'}}>Hire-Us</Link>
                    </div>
                    <div className=''>
                      <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                        <span className='slider'>
                          {theme === "dark" ? <FaMoon className="icon moon" /> : <FaSun className="icon sun" />}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

              {/* pages routes */}
            <Routes>
              <Route path='/homepage' element={<HomePage/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Form' element={<Form/>}/>
            </Routes>
          </div>
        </Router>
        </ErrorBoundary>
      {/* </ThemeProvider> */}
    </>
    
  )
}

export default App;