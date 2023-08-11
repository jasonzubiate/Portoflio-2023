import {
  Projects,
  Connect,
  Footer,
  SectionHeader,
  PageHeader,
} from "@/components";
import "@/styles/WorkPage.css";

export default function page() {
  return (
    <div id="work-page" className="fade-in">
      <section id="work-landing">
        <PageHeader />
        <div className="content">
          <SectionHeader number={1} title="My Work" />
          <div className="title-container">
            <div className="title">
              <h1 className="text-2xl uppercase">Projects</h1>
              <p className="text-l number">03</p>
            </div>
            <div className="info">
              <p className="text-m uppercase">Projects</p>
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
