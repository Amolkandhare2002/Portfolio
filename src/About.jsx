import "./About.css";
import {
  FaCode,
  FaLaptopCode,
  FaBullseye
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="section-tag">
            About Me
          </span>

          <h2>
           Software Developer
          </h2>

          <p>

I'm Amol Kandhare,final-year Information Technology student and MERN Stack Developer. passionate about building scalable, secure, and user-centric web applications. I have hands-on experience with React.js, Node.js, Express.js, MongoDB, REST APIs, and JavaScript, gained through projects including a Version Control System,Stock Trading Platform, and Tourism Management Platform.

I also completed a Cyber Security Internship at the Cyber Police Station, Pimpri Chinchwad, gaining practical exposure to digital forensics, cybercrime investigations, and cybersecurity best practices. I'm continuously strengthening my skills in Data Structures & Algorithms and modern software development while seeking opportunities to grow as a Software Engineer or Full Stack Developer.


          </p>

        </div>

        <div className="about-right">

          <div className="about-card">

            <FaCode className="icon"/>

            <h3>Programming</h3>

            <p>
              Java, JavaScript, OOP,
              Data Structures & Algorithms
            </p>

          </div>

          <div className="about-card">

            <FaLaptopCode className="icon"/>

            <h3>Full Stack</h3>

            <p>
              React.js, Node.js,
              Express.js,
              MongoDB,
              MySQL
            </p>

          </div>

          <div className="about-card">

            <FaBullseye className="icon"/>

            <h3>Career Goal</h3>

            <p>
              Looking for Software Engineer
              and Full Stack Developer roles
              to build impactful products.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;