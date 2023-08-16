// import { fetchLocalWeather } from "@/utils";
"use client";

import "@/styles/PageHeader.css";
import { useEffect } from "react";
import { gsap } from "gsap";

const date = new Date();
const laTime = date.toLocaleTimeString("en-US", {
  timeZone: "America/Los_Angeles",
  timeStyle: "short",
});

function PageHeader() {
  useEffect(() => {
    gsap.to(".page-header", {
      duration: 1,
      opacity: 1,
      ease: "power2",
      delay: 1.5,
    });
  }, []);

  // const weather = await fetchLocalWeather();
  // const { cloudCover, rainIntensity, temperature } =
  //   weather.timelines.minutely[0]?.values;

  // let weatherIcon = "";
  // if (temperature > 70) {
  //   weatherIcon = "☀️"; // Sunny
  // } else if (cloudCover > 3) {
  //   weatherIcon = "☁️"; // Cloudy
  // } else if (rainIntensity > 0) {
  //   weatherIcon = "🌧️"; // Rainy
  // }

  // {Math.round(temperature)}ºF {weatherIcon}

  return (
    <div className="page-header">
      <div className="header-item">
        <p className="text-m w-[200px]">Recent UCI Graduate</p>
      </div>
      <div className="header-item">
        <p className="text-m w-[200px]">Los Angeles {laTime}</p>
      </div>
    </div>
  );
}

export default PageHeader;
