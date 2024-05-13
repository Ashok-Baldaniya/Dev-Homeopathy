import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        {/* <div id="contact">
          <Contact />
        </div> */}

        {/* <div id="blog">
          <Blogs />
        </div> */}

      </main>

      <div id="contact">
        <Footer />
      </div>

    </div>
  );
};

export default App;
