"use client";

import "@/styles/PageHeader.css";
import { useEffect, useState } from "react";
import { fetchWeather, getLocalTimeLosAngeles } from "@/utils";
import { gsap } from "gsap";

function PageHeader() {
  const [laTime, setLATime] = useState("");
  const [weather, setWeather] = useState({
    temp: 0,
    desc: "",
    icon: "",
  });

  async function getWeather() {
    try {
      const weatherData = await fetchWeather();
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function updateLocalTime() {
    setLATime(getLocalTimeLosAngeles());
  }

  useEffect(() => {
    getWeather();
    updateLocalTime();

    const intervalId = setInterval(updateLocalTime, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    gsap.to(".page-header", {
      duration: 1,
      opacity: 1,
      ease: "power2",
      delay: 1,
    });
  }, []);

  return (
    <div className="page-header">
      <div className="header-item">
        <p className="text-m">Recent UCI Graduate</p>
      </div>
      <div className="header-item">
        <p className="text-m">{weather.temp}°F{weather.icon} Los Angeles {laTime}</p>
      </div>
    </div>
  );
}

export default PageHeader;
