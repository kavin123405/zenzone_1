import React from 'react'
import { useState } from 'react'
import Home from "./components/Home";
import Test from "./components/Test";
import Service from "./Pages/Service";
import Auth from "./frontend/Auth";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Booking from "./features/Booking";
import Resource from "./features/Resource";
import Volunteer from "./features/Volunteer";
import Chatbot from "./features/Chatbot";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/test" element={<Test />} />
        <Route path="/service" element={<Service />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/auth" element={<Auth />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App
