import "@/styles/Self.css";
import { SectionHeader } from ".";
import Link from "next/link";

interface Props {
  section: number;
}

function Self({ section }: Props) {
  return (
    <section id="self">
      <SectionHeader number={section} title="Self" />
      <div className="content">
        <div className="bio-top">
          <p className="text-l uppercase">
            Let&apos;s keep it short and sweet. I enjoy creating things.
          </p>
          <p className="text-l uppercase">
            When I&apos;m not creating. I am producing, visiting the beach, or
            having a fun night out with friends.
          </p>
        </div>
        <div className="bio-bottom">
          <h4 className="text-xl tagline uppercase">So Why Me?</h4>
          <div className="bio">
            <p className="text-m">
              With a strong background in UX design, I bring a unique
              perspective to frontend development. My understanding of user
              behavior, empathy-driven approach, and focus on creating intuitive
              designs allows me to craft experiences that are not only
              functional but also delight and engage users.
            </p>
            <p className="text-m">
              I excel in collaborating seamlessly with all other development
              teams, fostering a harmonious environment and ensuring a smooth
              integration of frontend elements with back-end systems and
              functionalities.
            </p>
            <Link href="/about" className="text-m basic-link">
              More about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Self;
