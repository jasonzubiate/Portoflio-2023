import "@/styles/Projects.css";
import Image from "next/image";
import splashhouse from "@/public/assets/img/splashhouse.jpg";

function Projects() {
  return (
    <section id="projects">
      <div className="section-header uppercase">
        <p className="text-m header-item">03/</p>
        <h2 className="text-m header-item">Projects</h2>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              Personal Portfolio
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                This is my personal website which contains a portfolio, resume,
                and a bit about me. I built it with many fresh{" "}
                <span className="link">react</span> &{" "}
                <span className="link">next.js</span> features such as custom{" "}
                <span className="link">hooks</span> and{" "}
                <span className="link">gsap</span> for animiations.
              </p>
              <div className="btn-group">
                <button>Live demo</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image src={splashhouse} alt="Portfolio Image" quality={100} />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">PromptShare</h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A CRUD web application to allow users to create and share
                helpful AI prompts to obtian the best responses from ai chat
                models such as chatgpt. It's built with{" "}
                <span className="link">react</span> &{" "}
                <span className="link">next.js</span> and connects to a{" "}
                <span className="link">mongodb</span> server to store user
                accounts and posts. The styling is done with{" "}
                <span className="link">Tailwind CSS</span> .
              </p>
              <div className="btn-group">
                <button>Live demo</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image src={splashhouse} alt="Portfolio Image" quality={100} />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">Threads Clone</h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                This is my personal website which contains a portfolio, resume,
                and a bit about me. I built it with many fresh{" "}
                <span className="link">react</span> and{" "}
                <span className="link">next.js</span> features such as custom{" "}
                <span className="link">hooks</span> and{" "}
                <span className="link">gsap</span> for animiations.
              </p>
              <div className="btn-group">
                <button>Live demo</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image src={splashhouse} alt="Portfolio Image" quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
