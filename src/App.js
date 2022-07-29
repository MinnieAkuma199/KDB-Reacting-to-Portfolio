// import logo from './logo.svg';
import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
