import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <div>
        {/* Main Content */}
        {/* <Home /> */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
