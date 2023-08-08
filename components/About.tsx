import "@/styles/About.css";
import Image from "next/image";
import ableton from "@/public/assets/img/ableton.jpg";
import { SectionHeader } from ".";

interface Props {
  section: number;
}

function About({ section }: Props) {
  return (
    <section id="about">
      <SectionHeader number={section} title="About Me" />
      <div className="content">
        <div className="hobbies">
          <h4 className="text-2xl uppercase">Producing,</h4>
          <Image className="img" src={ableton} alt="Producing" />
          <h4 className="text-2xl uppercase">Eating,</h4>
          <h4 className="text-2xl uppercase">Traveling.</h4>
        </div>
        <div className="hobbies-description">
          <p className="text-m text">
            I value my free time and make the most of it by practicing my
            hobbies or spending time with others. I’m either producing new
            music, enjoying some food, or out with my friends for the majority
            of the day.
          </p>
          <p className="text-m underline link">More about me</p>
        </div>
      </div>
    </section>
  );
}

export default About;
