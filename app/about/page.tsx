import "@/styles/AboutPage.css";
import { Connect, Footer, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";
import desk from "@/public/assets/img/desk.jpg";
import me from "@/public/assets/img/me.jpg";

export default function page() {
  return (
    <div id="about-page">
      <section id="jason">
        <PageHeader />
        <div className="content">
          <SectionHeader number={1} title="Jason" />
          <div className="bio-container">
            <div className="hobbies">
              <h4 className="text-2xl uppercase">Passionate</h4>
              <h4 className="text-2xl uppercase">Frontend</h4>
              <h4 className="text-2xl uppercase">Engineer</h4>
              <Image className="img" src={desk} alt="Producing" priority />
              <h4 className="text-2xl uppercase">Based in</h4>
              <h4 className="text-2xl uppercase">Los Angeles</h4>
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
