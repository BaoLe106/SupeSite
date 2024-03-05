import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* <Route/>
          <Route/> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
