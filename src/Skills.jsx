
import "./Skills.css";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

function Skills() {

  const skillGroups = [
    {
      title: "Programming",
      icon: <FaJava />,
      skills: ["Java", "JavaScript", "OOP", "DSA"],
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: ["Node.js", "Express.js", , "REST API"],
    },
    {
      title: "Database",
      icon: <SiMysql />,
      skills: ["MySQL", "MongoDB", "DBMS"],
    },
    {
      title: "Tools",
      icon: <FaGithub />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="skills">

      <div className="skills-header">

        <span className="section-tag">
          Technical Skills
        </span>

        <h2>Skills & Technologies</h2>

        <p>
          Technologies and tools I use to build modern,
          scalable full-stack web applications.
        </p>

      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-top">

              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

            </div>

            <div className="skill-list">

              {group.skills.map((skill, i) => (

                <span key={i}>{skill}</span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;