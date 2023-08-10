"use client";

import "@/styles/Projects.css";
import Image from "next/image";
import splashhouse from "@/public/assets/img/splashhouse.jpg";
import CustomButton from "./CustomButton";
import { SectionHeader } from ".";

interface Props {
  section: number;
}

function Projects({ section }: Props) {
  return (
    <section id="projects">
      <SectionHeader number={section} title="Projects" />
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
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href = "https://www.jasonzubiate.com")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/portfolio2023")
                  }
                />
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
            <h3 className="text-2xl project-title uppercase">
              <span>PromptS</span>
              <span>hare</span>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A CRUD web application to allow users to create and share
                helpful AI prompts to obtian the best responses from ai chat
                models such as chatgpt. It&apos;s built with{" "}
                <span className="link">react</span> &{" "}
                <span className="link">next.js</span> and connects to a{" "}
                <span className="link">mongodb</span> server to store user
                accounts and posts. The styling is done with{" "}
                <span className="link">Tailwind CSS</span> .
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://prompt-share-one.vercel.app")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/PromptShare")
                  }
                />
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
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href = "https://www.jasonzubiate.com")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href = "https://www.jasonzubiate.com")
                  }
                />
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
