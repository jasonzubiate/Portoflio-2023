"use client";

import "@/styles/Connect.css";
import CustomButton from "./CustomButton";
import { SectionHeader } from ".";
import { emailRedirect } from "@/utils";

interface Props {
  section: number;
}

function Connect({ section }: Props) {
  
  return (
    <section id="connect">
      <SectionHeader number={section} title="Want to work together?" />
      <div className="content">
        <div className="connect-body">
          <h2 className="text-4xl">Let&apos;s Connect</h2>
          <div className="services">
            <label
              htmlFor="Services"
              className="services-label text-[28px] uppercase"
            >
              I&apos;m always intersted in
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
      </div>
    </section>
  );
}

export default Connect;
