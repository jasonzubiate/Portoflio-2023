import "@/styles/Hero.css";
import Image from "next/image";
import arrow from "@/public/assets/icons/down-arrow.png";

interface HeroProps {
  temperature: number;
  weatherIcon: string;
}

function Hero({ temperature, weatherIcon }: HeroProps) {
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
        <h2 className="text-4xl role">Frontend Engineer</h2>
      </div>
      <div className="hero-info uppercase">
        <div className="info-left">
          <Image src={arrow} alt="Down Arrow" className="arrow" priority />
          <div className="text-m bio">
            I am a creative developer with over 2 years of experience in React.
            Based in Los Angeles, CA
          </div>
        </div>
        <div className="info-right">
          <h1 className="text-2xl name">Jason Zubiate</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
