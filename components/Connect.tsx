"use client";

import "@/styles/Connect.css";
import Link from "next/link";
import CustomButton from "./CustomButton";

function Connect() {
  const emailRedirect = () => {
    const emailAddress = "jzubiate.dev@gmail.com";
    const subject = "🤙 I am looking for a Frontend Engineer. Let's talk";

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoUrl;
  };
  return (
    <section id="connect">
      <div className="section-header">
        <p className="text-m header-item">05/</p>
        <h2 className="text-m header-item uppercase">Want to work together?</h2>
      </div>
      <div className="content">
        <div className="connect-body">
          <h2 className="text-4xl">Let's Connect</h2>
          <div className="services">
            <label
              htmlFor="Services"
              className="services-label text-[28px] uppercase"
            >
              I'm always intersted in
            </label>
            <div className="btn-group">
              <div className="btn-row">
                <CustomButton
                  title="Frontend development"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
                <CustomButton
                  title="UX/UI Design"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
              </div>
              <div className="btn-row">
                <CustomButton
                  title="UX Research"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
                <CustomButton
                  title="Webflow Development"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
                <CustomButton
                  title="Startups"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
              </div>
              <div className="btn-row">
                <CustomButton
                  title="New Businesses"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
                <CustomButton
                  title="Producing"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
                <CustomButton
                  title="Lunch"
                  textStyles="text-m xl:text-[28px]"
                  handleClick={emailRedirect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="connect-footer">
          <div className="footer-left">
            <div className="role">
              <p className="text-m">Jason Zubiate</p>
              <p className="text-m">Creative frontend engineer</p>
            </div>
            <div className="socials">
              <span>
                <Link
                  className="text-m"
                  href="https://www.linkedin.com/in/jasonzubiate/"
                >
                  LinkedIn,{" "}
                </Link>
                <Link
                  className="text-m"
                  href="https://github.com/jasonzubiate?tab=repositories"
                >
                  Github,{" "}
                </Link>
                <Link
                  className="text-m"
                  href="https://dribbble.com/jasonzubiate"
                >
                  Dribbble
                </Link>
              </span>
            </div>
          </div>
          <div className="footer-right">
            <Link className="text-m" href="https://dribbble.com/jasonzubiate">
              v1
            </Link>
            <button
              className="text-m"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
