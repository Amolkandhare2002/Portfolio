import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CodeDock",
    category: "Featured Project",
    image: "/CodeDock.jpg",
    description:
      "AI-powered Version Control System inspired by GitHub with repository creation, commit history, JWT authentication, Google Gemini AI integration and AWS S3 storage.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "AWS S3"
    ],
    github: "https://github.com/Amolkandhare2002",
    live: "#"
  },

  {
    title: "TradeX",
    category: "MERN Stack",
    image: "/TradeX.jpg",
    description:
      "Full Stack Stock Trading Platform featuring secure authentication, buying & selling stocks, holdings management, portfolio analytics and interactive dashboards.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "REST API"
    ],

    github:"https://github.com/Amolkandhare2002",

    live:"#"

  },

  {

    title:"WanderLust",

    category:"Full Stack",

    image:"/WanderLust.jpg",

    description:
    "Tourism Management Platform allowing users to create listings, explore destinations and perform complete CRUD operations with responsive design.",

    tech:[
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap"
    ],

    github:"https://github.com/Amolkandhare2002",

    live:"#"

  }

];

function Projects(){

return(

<section className="projects" id="projects">

<div className="projects-container">

<div className="section-heading">

<span>
Featured Projects
</span>

<h2>
My Projects
</h2>

<p>
Some of my best full stack projects built using modern web technologies.
</p>

</div>

<div className="projects-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

<div className="overlay">

{/* <span>
{project.category}
</span> */}

</div>

</div>

<div className="project-content">

<h3>
{project.title}
</h3>

<p>
{project.description}
</p>

<div className="tech-stack">

{project.tech.map((item,i)=>(

<span key={i}>
{item}
</span>

))}

                </div>

                <div className="project-buttons">

                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a> */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Projects;