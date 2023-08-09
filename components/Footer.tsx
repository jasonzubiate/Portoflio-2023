"use client";

import "@/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="role">
          <p className="text-m">Jason Zubiate</p>
          <p className="text-m">Creative frontend engineer</p>
        </div>
        <div className="socials">
          <span>
            <a
              className="text-m hover-link"
              href="https://www.linkedin.com/in/jasonzubiate/"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className="text-m hover-link"
              href="https://github.com/jasonzubiate?tab=repositories"
            >
              Github
            </a>
            ,{" "}
            <a
              className="text-m hover-link"
              href="https://dribbble.com/jasonzubiate"
            >
              Dribbble
            </a>
          </span>
        </div>
      </div>
      <div className="footer-right">
        <a
          className="text-m hover-link"
          href="https://dribbble.com/jasonzubiate"
        >
          v1
        </a>
        <button
          className="text-m hover-link"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
