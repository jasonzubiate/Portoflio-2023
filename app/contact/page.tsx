"use client";

import { emailRedirect } from "@/utils";
import "@/styles/ContactPage.css";
import { Footer, PageHeader } from "@/components";

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { emit } from "process";

export default function Page() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", delay: 0.1 },
    });
    // const textLines = document.querySelectorAll(".link");

    // textLines.forEach((textLine: any) => {
    //   const split = new SplitType(textLine, {
    //     types: "chars",
    //   });
    // });

    tl.to(
      ".catchline",
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.1,
      },
      0
    );
    tl.to(
      ".link",
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.1,
      },
      0
    );
  });

  return (
    <div id="contact-page" className="fade-in">
      <section id="contact-landing">
        <PageHeader />
        <div className="content">
          <div className="cta-group">
            <h4 className="text-m catchline">Send me a message</h4>
            <button onClick={emailRedirect}>
              <div className="text-2xl link">jzubiate.dev@</div>
              <div className="text-2xl link">gmail.com</div>
            </button>
          </div>
          <div className="cta-group">
            <h4 className="text-m catchline">Or connect with me elsewhere</h4>
            <div className="links">
              <a
                className="text-2xl link"
                href="https://www.linkedin.com/in/jasonzubiate/"
              >
                LinkedIn
              </a>
              <a
                className="text-2xl link"
                href="https://github.com/jasonzubiate?tab=repositories"
              >
                Github
              </a>
              <a
                className="text-2xl link"
                href="https://dribbble.com/jasonzubiate"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
