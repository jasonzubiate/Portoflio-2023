"use client";

import "@/styles/PageHeader.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

function PageHeader() {
  const [laTime, setLATime] = useState(getLocalTime());

  function getLocalTime() {
    const date = new Date();
    const options = { hour: "numeric", minute: "numeric", hour12: true } as Intl.DateTimeFormatOptions;
    return date.toLocaleTimeString("en-US", options);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLATime(getLocalTime());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    gsap.to(".page-header", {
      duration: 1,
      opacity: 1,
      ease: "power2",
      delay: 1.5,
    });
  }, []);

  return (
    <div className="page-header">
      <div className="header-item">
        <p className="text-m w-[200px]">Recent UCI Graduate</p>
      </div>
      <div className="header-item">
        <p className="text-m w-[200px]">Based In Los Angeles</p>
      </div>
    </div>
  );
}

export default PageHeader;