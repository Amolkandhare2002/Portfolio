import "./Home.css";
import hero from "./assets/hero.png";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        {/* LEFT SIDE */}

        <div className="left">

          <span className="hero-badge">
            👋 Welcome to My Portfolio
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Amol Kandhare <span></span>
          </h1>

          <h2>Software Developer</h2>

          <p className="intro">
            Full-Stack Developer passionate about building scalable web applications and impactful digital solutions.

            <br /><br />

            {/* I enjoy developing modern full-stack web applications,
            solving Data Structures & Algorithms problems,
            and continuously learning new technologies. */}

            <br /><br />

            {/* Currently seeking opportunities as a
            <strong> Software Engineer</strong> or
            <strong> Full Stack Developer.</strong> */}
          </p>

          <div className="hero-buttons">

            {/* <a
              href="/Amol Kandhare ResumeF.pdf"
              download
              className="primary-btn"
            >
              <FaDownload />
              Download Resume
            </a> */}

            <a
              href="#projects"
              className="secondary-btn"
            >
              View Projects
              <FaArrowRight />
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/Amolkandhare2002"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/amol-kandhare-7826112a5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/Amolkandhare/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>

          </div>

          <div className="stats">

            {/* <div className="stat"> */}
              {/* <h2>8.79</h2>
              <p>CGPA</p> */}
            {/* </div> */}

            <div className="stat">
              <h2>5+</h2>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h2>15+</h2>
              <p>Certificates</p>
            </div>

            <div className="stat">
              <h2>1</h2>
              <p>Internship</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="right">

             <div className="profile-wrapper">

            <img
              src={hero}
              alt="Amol Kandhare"
              className="profile-image"
            />

            {/* <div className="tech-card tech1">
              🟢  <span>Node</span>
            </div>

            <div className="tech-card tech2">
              ⚛️ <span>React</span>
            </div>

            <div className="tech-card tech3">
              🚀 <span>Express</span>
            </div>

            <div className="tech-card tech4">
              🍃 <span>MongoDB</span>
            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;