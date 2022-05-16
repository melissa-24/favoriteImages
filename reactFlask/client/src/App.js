import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/styles.css";
import LogReg from './components/logReg'
import Dashboard from './components/dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogReg />} />
          <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
