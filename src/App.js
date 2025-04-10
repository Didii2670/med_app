// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/login/login';
import SignUp from './Components/Sign_Up/Sign_Up';

import './App.css';

// Function component for the main App
function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Sign_Up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;
