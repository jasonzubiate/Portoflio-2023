"use client";

import "@/styles/Projects.css";
import Image from "next/image";
import splashhouse from "@/public/assets/img/splashhouse.jpg";
import portfolio from "@/public/assets/img/portfolio.png";
import promptshare from "@/public/assets/img/promptshare.png";
import carshowcase from "@/public/assets/img/carshowcase.png";

import { SectionHeader, CustomButton } from ".";

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
              <a href="https://www.jasonzubiate.com">Personal Portfolio</a>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                This is my personal website which contains a portfolio, resume,
                and a bit about me. I built it with many fresh{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                features such as custom{" "}
                <a
                  href="https://legacy.reactjs.org/docs/hooks-custom.html"
                  className="link"
                >
                  hooks
                </a>{" "}
                and{" "}
                <a href="https://greensock.com/gsap/" className="link">
                  gsap
                </a>{" "}
                for animiations.
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
            <Image
              src={portfolio}
              alt="Portfolio Image"
              className="img"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <span>
                <a href="https://prompt-share-jz.vercel.app">PromptS</a>
              </span>
              <span>
                <a href="https://prompt-share-jz.vercel.app">hare</a>
              </span>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A CRUD web application to share helpful prompts and obtian the
                best responses from ai models such as chatgpt. It&apos;s built
                with{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                and connects to a <span className="link">mongodb</span> server
                to store user accounts and posts. The styling is done with{" "}
                <a href="https://tailwindcss.com/" className="link">
                  Tailwind CSS
                </a>{" "}
                .
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://car-showcase-jz.vercel.app/")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/car_showcase")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={promptshare}
              alt="Promptshare Image"
              className="img"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <span>
                <a href="https://car-showcase-jz.vercel.app/">Carshow</a>
              </span>
              <span>
                <a href="https://car-showcase-jz.vercel.app/">case</a>
              </span>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A modern car rental platform built with{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                features inlcuding server-side rendering. It uses{" "}
                <a
                  href="https://rapidapi.com/apininjas/api/cars-by-api-ninjas"
                  className="link"
                >
                  rapid api
                </a>{" "}
                for fetching detailed car data and{" "}
                <a href="https://tailwindcss.com/" className="link">
                  Tailwind CSS
                </a>{" "}
                for styling.
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
            <Image src={carshowcase} alt="Portfolio Image" quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
