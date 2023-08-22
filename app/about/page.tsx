"use client";

import "@/styles/AboutPage.css";
import { Connect, Footer, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";

import desk from "@/public/assets/img/desk2.jpg";
import me from "@/public/assets/img/me.jpg";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", delay: 0.1 },
    });
    const textLines = document.querySelectorAll(".uppercase");

    textLines.forEach((textLine: any) => {
      const split = new SplitType(textLine, {
        types: "chars",
      });
    });

    tl.from(".t1 .char", {
      duration: 0.5,
      yPercent: 100,
      stagger: 0.1,
    });
    tl.from(
      ".t2 .char",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0.1
    );
    tl.from(
      ".t3 .char",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0.1
    );
    tl.to(
      ".img",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: .8,
        ease: "power3.in",
      },
      0.4
    );
    tl.from(
      ".t4 .char",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0.1
    );
    tl.from(
      ".t5 .char",
      {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.1,
      },
      0.1
    );
  }, []);

  return (
    <div id="about-page" className="fade-in">
      <section id="jason">
        <PageHeader />
        <div className="content">
          <SectionHeader number={1} title="Jason" />
          <div className="bio-container">
            <div className="hobbies">
              <div className="mask">
                <h4 className="text-2xl uppercase t1">Passionate</h4>
              </div>
              <div className="mask">
                <h4 className="text-2xl uppercase t2">Frontend</h4>
              </div>
              <div className="mask">
                <h4 className="text-2xl uppercase t3">Engineer</h4>
              </div>
              <Image className="img" src={desk} alt="Producing" priority />
              <div className="mask">
                <h4 className="text-2xl uppercase t4">Based in</h4>
              </div>
              <div className="mask">
                <h4 className="text-2xl uppercase t5">Los Angeles</h4>
              </div>
            </div>
            <div className="bio-bottom">
              <h4 className="text-m tagline">A journey of lifelong learning</h4>
              <div className="bio">
                <p className="text-m">
                  I am a frontend engineer with over two years of expiernece
                  with React and Next.js. I have collaborated with teams to
                  bring web and mobile applications to life. I also have had the
                  chance to work with users through usability testing cohorts to
                  further understand the needs of users when designing software.
                </p>
                <p className="text-m">
                  Each project is an opportunity to learn new concepts across
                  multiple disciplines. I am motivated by working on meaningful
                  intiatives with diverse teamates.
                </p>
                <Image
                  className="portrait"
                  src={me}
                  alt="Jason Zubiate"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Connect section={2} />
      <Footer />
    </div>
  );
}
