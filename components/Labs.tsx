"use client";

import "@/styles/Projects.css";
import Image from "next/image";
import { SectionHeader, CustomButton } from ".";
import codesandbox from "@/public/assets/img/codesandbox.png";

interface Props {
  section: number;
}

function Labs({ section }: Props) {
  return (
    <section id="projects">
      <SectionHeader number={section} title="Labs" />
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <a href="https://codesandbox.io/u/jasonzubiate">
                CodeSan <br />
                dbox
              </a>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                All of these labs display my knowledge of HTML, CSS, and
                JavaScript. I incorperate animations in all of my challenges,
                primarily using{" "}
                <a href="https://greensock.com/" className="link">
                  GSAP
                </a>
                .
              </p>
              <div className="btn-group">
                <CustomButton
                  title="CodeSandbox"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://codesandbox.io/u/jasonzubiate")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/UI-Challenges")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={codesandbox}
              alt="codesandbox_img"
              className="img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Labs;
