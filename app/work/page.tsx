"use client";

import {
  Projects,
  Connect,
  Footer,
  SectionHeader,
  PageHeader,
} from "@/components";
import "@/styles/WorkPage.css";
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

export default function Page() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", delay: 0.1 },
    });
    const textLines = document.querySelectorAll(".a1");

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
      ".number",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0
    );
    tl.from(
      ".a2",
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
          <div className="title-container">
            <div className="title">
              <div className="mask">
                <h1 className="text-2xl uppercase a1">Projects</h1>
              </div>
              <div className="mask">
                <p className="text-l number">03</p>
              </div>
            </div>
            <div className="info">
              <div className="mask">
                <p className="text-m uppercase a2">Projects</p>
              </div>
              <p className="text-m description">
                A selected set of individual projects aimed at expanding my
                overall knowledge of frontend developent as well exploring full
                stack to become a more well rounded software engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Projects section={2} />
      <Connect section={3} />
      <Footer />
    </div>
  );
}
