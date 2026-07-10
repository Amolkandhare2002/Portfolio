import "./Navbar.css";
import { FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          <div className="logo-icon">
            <FaCode />
          </div>

          <div className="logo-text">
            <h3>Amol</h3>
            <span>Portfolio</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#internship">Experience</a>
            </li>

            <li>
              <a href="#certifications">Certificates</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </nav>

        {/* <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a> */}

      </div>
    </header>
  );
}

export default Navbar;