"use client";

import "@/styles/Skills.css";
import CustomButton from "./CustomButton";
import { SectionHeader } from ".";
import { emailRedirect } from "@/utils";

interface Props {
  section: number;
}

function Skills({ section }: Props) {
  return (
    <section id="skills">
      <SectionHeader number={section} title="Skills" />
      <div className="content">
        <h3 className="text-3xl tagline uppercase">
          What i bring to the table
        </h3>
        <div className="content-right">
          <div className="skills uppercase">
            <div className="skill">
              <label htmlFor="skill-type" className="text-m skill-type">
                Languages
              </label>
              <p className="text-m skill-list">
                Typescript, javascript, html, css, jsx/tsx, tailwind, SASS,
                python, jQuery
              </p>
            </div>
            <div className="skill">
              <label htmlFor="skill-type" className="text-m skill-type">
                Software
              </label>
              <p className="text-m skill-list">
                React, react native, next.js, angular, redux, jest, cypress, gsap,
                redux, recoil, figma, miro, maze, testflight
              </p>
            </div>
            <div className="skill">
              <label htmlFor="skill-type" className="text-m skill-type">
                Soft Skills
              </label>
              <p className="text-m skill-list">
                Communication, problem solving, creativity and design
                sensibilty, agile time management, adaptability and continuous
                learning
              </p>
            </div>
          </div>
          <CustomButton
            title="Contact Me"
            textStyles="text-m"
            handleClick={emailRedirect}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
