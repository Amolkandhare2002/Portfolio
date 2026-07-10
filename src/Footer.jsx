import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="footer">

      {/* <h3 className="footer-name">
        Amol Kandhare
      </h3> */}

      <p className="footer-text">
        Built with Passion.  © {year} All rights reserved
        <br/>
              Terms &nbsp;&nbsp;&nbsp; Privacy  &nbsp;&nbsp;&nbsp;    Refund Policy
      </p>

      <hr />

      <h2 className="copyright">
        <strong>Designed & Developed by Amol Kandhare❤️</strong>
      </h2>

    </footer>

  );

}

export default Footer;