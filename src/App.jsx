
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Internship from "./Internship";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-container">
        <section id="home" className="section hero-section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="internship" className="section">
          <Internship />
        </section>

        <section id="certifications" className="section">
          <Certifications />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;



// import Navbar from "./Navbar";
// import Home from "./Home";
// import About from "./About";
// import Education from "./Education";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Internship from "./Internship";
// import Certifications from "./Certifications";
// import Contact from "./Contact";
// import Footer from "./Footer";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main className="main-container">

//         <Home />

//         <About />

//         <Education />

//         <Skills />

//         <Projects />

//         <Internship />

//         <Certifications />

//         <Contact />

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;