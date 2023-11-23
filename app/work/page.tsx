"use client";

import {
  Projects,
  Labs,
  Connect,
  Footer,
  SectionHeader,
  PageHeader,
} from "@/components";
import "@/styles/WorkPage.css";
import { useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

export default function Page() {
  const [selectedWork, setSelectedWork] = useState("projects");

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", delay: 0.1 },
    });
    const textLines = document.querySelectorAll(".a1, .a2");

    textLines.forEach((textLine: any) => {
      const split = new SplitType(textLine, {
        types: "chars",
      });
    });

    tl.from(".a1 .char", {
      duration: 0.5,
      yPercent: 100,
      stagger: 0.1,
    });
    tl.from(
      ".a2 .char",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0
    );
    tl.from(
      ".number",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0
    );
    tl.from(
      ".a3",
      {
        duration: 0.5,
        yPercent: 100,
      },
      0.5
    );
    tl.from(
      ".description",
      {
        duration: 1.5,
        opacity: 0,
      },
      0.5
    );
  });

  return (
    <div id="work-page" className="fade-in">
      <section id="work-landing">
        <PageHeader />
        <div className="content">
          <SectionHeader number={1} title="My Work" />
          <div className="container">
            <div className="title-container">
              <button
                onClick={() => setSelectedWork("projects")}
                className="title"
              >
                <div className="mask">
                  <h1
                    className={`text-2xl uppercase a1 ${
                      selectedWork !== "projects" ? "opacity-20" : ""
                    }`}
                  >
                    Projects
                  </h1>
                </div>
                <div className="mask">
                  <p
                    className={`text-l number ${
                      selectedWork !== "projects" ? "opacity-20" : ""
                    }`}
                  >
                    04
                  </p>
                </div>
              </button>
              <button onClick={() => setSelectedWork("labs")} className="title">
                <div className="mask">
                  <h1
                    className={`text-2xl uppercase a2 ${
                      selectedWork !== "labs" ? "opacity-20" : ""
                    }`}
                  >
                    Labs
                  </h1>
                </div>
                <div className="mask">
                  <p
                    className={`text-l number ${
                      selectedWork !== "labs" ? "opacity-20" : ""
                    }`}
                  >
                    5
                  </p>
                </div>
              </button>
            </div>
            {selectedWork === "projects" ? (
              <div className="info">
                <div className="mask">
                  <p className="text-m uppercase a3">Projects</p>
                </div>
                <p className="text-m description">
                  A selected set of individual projects aimed at expanding my
                  overall knowledge of frontend developent as well exploring
                  full stack to become a more well rounded software engineer.
                </p>
              </div>
            ) : (
              <div className="info">
                <div className="mask">
                  <p className="text-m uppercase a3">Labs</p>
                </div>
                <p className="text-m description">
                  A collection of user interface and widget challenges using
                  HTML, CSS, and JavaScript. These are fun to make and allow me
                  to share design concepts that I like.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {selectedWork === "projects" ? (
        <Projects section={2} />
      ) : (
        <Labs section={2} />
      )}
      <Connect section={3} />
      <Footer />
    </div>
  );
}
