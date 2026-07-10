import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education">

      <div className="edu-heading">

        <span className="section-tag">
          Education
        </span>

        <h2>My Academic Journey</h2>

        <p>
          My academic background that strengthened my
          technical knowledge and problem-solving abilities.
        </p>

      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span>2023 - 2027</span>

            <h3>B.E. Information Technology</h3>

            <h4>
              Dr. D. Y. Patil College of Engineering,
              Akurdi, Pune
            </h4>

            <p>
              CGPA : <strong>8.79 / 10</strong>
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span>2020</span>

            <h3>Higher Secondary (HSC)</h3>

            <h4>
              Shri Shivaji Secondary &
              Higher Secondary School
            </h4>

            <p>
              Percentage :
              <strong> 68.53%</strong>
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span>2018</span>

            <h3>Secondary School (SSC)</h3>

            <h4>
              Mahatma Phule Vidyalaya,
              Kandhar
            </h4>

            <p>
              Percentage :
              <strong> 92.60%</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;