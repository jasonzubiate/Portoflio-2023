"use client";

import "@/styles/Hero.css";
import Image from "next/image";
import arrow from "@/public/assets/icons/down-arrow.png";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";
// import useWindowDimensions from "@/hooks/useWindowDimensions";
import { PageHeader } from ".";


function Hero() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", delay: 0.1 },
    });
    const textLines = document.querySelectorAll(".role, .name");

    textLines.forEach((textLine: any) => {
      const split = new SplitType(textLine, {
        types: "chars",
      });
    });

    tl.from(".first .char", {
      duration: 1,
      yPercent: 100,
      stagger: 0.1,
    });
    tl.from(
      ".last .char",
      {
        duration: 1,
        yPercent: 100,
        stagger: 0.1,
      },
      "<"
    );
    tl.from(
      ".frontend .char",
      {
        duration: 0.8,
        yPercent: 100,
        stagger: 0.08,
      },
      0
    );
    tl.from(
      ".engineer .char",
      {
        duration: 0.8,
        yPercent: 100,
        stagger: 0.08,
      },
      "<"
    );
    tl.to(
      ".arrow",
      {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2",
      },
      1.5
    );
    tl.to(
      ".arrow-mbl",
      {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2",
      },
      1.5
    );
    tl.to(
      ".bio-line",
      {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2",
      },
      1.5
    );
  }, []);

  return (
    <section id="hero">
      <PageHeader />
      <div className="hero-header uppercase">
        <p className="text-m">Creative</p>
        <div className="mask">
          <h2 className="text-4xl role frontend">Frontend</h2>
        </div>
        <div className="mask">
          <h2 className="text-4xl role engineer">Engineer</h2>
        </div>
      </div>
      <div className="hero-info uppercase">
        <div className="info-left">
          <div className="mask">
            <Image src={arrow} alt="Down Arrow" className="arrow" priority />
          </div>

          <div className="text-m bio">
            <div className="mask">
              {" "}
              <span className="bio-line block">I am a creative developer</span>
            </div>
            <div className="mask">
              <span className="bio-line block">with over 2 years of</span>
            </div>
            <div className="mask">
              <span className="bio-line block">experience in React.</span>
            </div>
            <div className="mask">
              <span className="bio-line block">Based in Los Angeles, CA</span>
            </div>
          </div>
        </div>
        <div className="info-right">
          <div className="mask">
            <Image
              src={arrow}
              alt="Down Arrow"
              className="arrow-mbl"
              priority
            />
          </div>
          <div>
            <div className="mask">
              <h1 className="text-2xl name first">Jason</h1>
            </div>
            <div className="mask">
              <h1 className="text-2xl name last">Zubiate</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
