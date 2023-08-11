"use client";

import { emailRedirect } from "@/utils";
import "@/styles/ContactPage.css";
import { Footer, PageHeader } from "@/components";

export default function page() {
  return (
    <div id="contact-page">
      <section id="contact-landing">
        <PageHeader />
        <div className="content">
          <div className="cta-group">
            <h4 className="text-m catchline">Send me a message</h4>
            <button className="text-2xl link" onClick={emailRedirect}>
              jzubiate.dev@gmail.com
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
