import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">Let's Connect</h2>

      <p className="contact-text">
        I'm open to internship opportunities, entry-level software roles,
        and collaborative projects where I can contribute and grow as a developer.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:amolkandhare2002@gmail.com">
            amolkandhare2002@gmail.com
          </a>
        </div>


        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Amolkandhare2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Amolkandhare2002
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="http://www.linkedin.com/in/amol-kandhare-7826112a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </div>

        <div className="contact-card">
  <SiLeetcode className="contact-icon" />
  <h3>LeetCode</h3>
  <a
    href="https://leetcode.com/u/Amolkandhare/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Profile
  </a>
</div>

        

      </div>

    </section>
  );
}

export default Contact;