"use client";

import "@/styles/Hero.css";
import Image from "next/image";
import arrow from "@/public/assets/icons/down-arrow.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

interface HeroProps {
  temperature: number;
  weatherIcon: string;
}

function Hero({ temperature, weatherIcon }: HeroProps) {
  const { width, height } = useWindowDimensions();
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const splitTypes = document.querySelectorAll(".reveal-type");

  //   splitTypes.forEach((char: any, i) => {
  //     const text = new SplitType(char, { types: "chars", absolute: true });

  //     gsap.from(text.chars, {
  //       ScrollTrigger: {
  //         trigger: char,
  //         start: "top 20%",
  //         end: "top 20%",
  //         scrub: true,
  //       },
  //       opacity: 0.2,
  //       stagger: 0.1,
  //     });
  //   });
  // }, []);

  return (
    <section id="hero">
      <div className="header">
        <div className="header-item">
          <p className="text-m w-[200px]">Recent UCI Graduate</p>
        </div>
        <div className="header-item">
          <p className="text-m w-[200px]">
            {temperature}ºF {weatherIcon} Los Angeles 10:16 PM
          </p>
        </div>
      </div>
      <div className="hero-header uppercase">
        <p className="text-m ">Creative</p>
        <h2 className="text-4xl role reveal-type">Frontend Engineer</h2>
      </div>
      <div className="hero-info uppercase">
        <div className="info-left">
          {width > 1000 ? (
            <Image src={arrow} alt="Down Arrow" className="arrow" priority />
          ) : (
            ""
          )}
          <div className="text-m bio">
            I am a creative developer with over 2 years of experience in React.
            Based in Los Angeles, CA
          </div>
        </div>
        <div className="info-right">
          {width < 1000 ? (
            <Image src={arrow} alt="Down Arrow" className="arrow" priority />
          ) : (
            ""
          )}

          <h1 className="text-2xl name reveal-type">Jason Zubiate</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
