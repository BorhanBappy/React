import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error"; // Updated import
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  // const location = useLocation();

  // // // Check if the current location matches the ErrorPage route
  // const isOnErrorPage = location.pathname === "*";

  return (
    <div>
      <BrowserRouter>
        {<Navbar />} 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
