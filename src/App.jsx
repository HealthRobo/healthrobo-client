// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar"; // We'll create the Navbar next
import Simulations from "./pages/Simulations";
import Playground from "./pages/Playground";

function App() {
  return (
    <Router>
      {/* Top Navbar */}
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Simulations />} />
          <Route path="/patient-simulations/:id" element={<Playground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
