import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';
import Content from './components/Content';
import Form from './components/Form';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


// App Component
function App() {
  return (
    <Router>
      <div className='d-flex flex-column' style={{height: '100vh'}}>
        <Header />
        <Sidenav />
        <div className='d-flex'>
          
          <div className='flex-grow-1'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Services />} />
              <Route path="/content" element={<Content />} />
              <Route path="/form" element={<Form />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />


            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
