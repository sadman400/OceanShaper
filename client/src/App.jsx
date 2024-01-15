import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./App.css";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./Layout/Layout";
import Feedback from "./components/Feedback/Feedback";
import About from "./components/About/About";
import Consultation from "./components/Consultation/Consultation";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import WorkProcess from "./components/WorkProcess/WorkProcess";

const App = () => {
  
  return (
    <Layout>
      <div>
        <div className="hero">
          <Navbar />
          <Header /> 
        </div>
        <Services />
        <Portfolio />
        <Feedback />
        <About />
        <Consultation />
        <Skills />
        <Experience />
        <WorkProcess />
        <Footer />
      </div>
    </Layout>
  );
};

export default App;
