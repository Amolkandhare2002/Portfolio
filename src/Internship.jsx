import "./Internship.css";

function Internship() {
  return (
    <section className="internship" id="internship">

      <h2 className="section-title">Internship Experience</h2>

      <p className="section-subtitle">
        Practical industry experience gained through hands-on work in Cyber Security and Digital Investigation.
      </p>

      <div className="internship-card">

        <div className="internship-header">

          <div>

            <span className="internship-badge">
              Jan 2026
            </span>

            <h3>Cyber Security Intern</h3>

            <h4>Pimpri Chinchwad Cyber Police Station</h4>

          </div>

        </div>

        <p className="duration">
          📅 01 Jan 2026 – 30 Jan 2026
        </p>

        <p className="internship-desc">
          Successfully completed a one-month onsite internship focused on cybercrime investigation,
          cybersecurity operations, digital evidence analysis, and incident response procedures.
        </p>

        <ul className="internship-list">

          <li>
            Investigated cybercrime cases involving phishing, identity theft, financial fraud, and social media abuse.
          </li>

          <li>
            Worked with digital evidence, system logs, IP tracking, and forensic investigation workflows.
          </li>

          <li>
            Assisted officers in complaint verification, cyber incident analysis, and evidence documentation.
          </li>

          <li>
            Improved practical understanding of cybersecurity principles, cyber laws, and investigation methodologies.
          </li>

        </ul>

      </div>

    </section>
  );
}

export default Internship;